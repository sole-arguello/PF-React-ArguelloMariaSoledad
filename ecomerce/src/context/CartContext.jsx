import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
export const CartProvider = ({children}) => {

    //carrito comienza vacio
    const [cartList, setCartList] = useState([])

    //agregar producto
    const addItem = (newProduct) => {
        const index = cartList.findIndex(prod => prod.id === newProduct.id)
        console.log(index)
        if(index === -1){
            setCartList([...cartList, newProduct])
        }else{
            const actualizoCartList = [...cartList]
            actualizoCartList[index].cantidad += newProduct.cantidad
            setCartList(actualizoCartList)
        }
    }

    //remover item x id
    const removeItem = (itemId) =>{
        const item = cartList.filter( prod => prod.id !== itemId)
        setCartList(item)
    }

    //vaciar carrito
    const clearCart = () => {
        
        setCartList([])
    }   

    //cantidad total de la compra
    const totalBuys = () => cartList.reduce((total, prod) => total + prod.precio * prod.cantidad, 0) 
    
    //cantidad total de productos en carrito
    const totalInCart = () => cartList.reduce( (total, prod) => total + prod.cantidad, 0) 

    return(
        <CartContext.Provider value={{
            cartList,
            totalBuys,
            totalInCart,
            addItem,
            clearCart,
            removeItem,
            
        }}>
            { children }
        </CartContext.Provider>
    )
}


