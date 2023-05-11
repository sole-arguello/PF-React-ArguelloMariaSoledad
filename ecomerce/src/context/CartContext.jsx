import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
export const CartProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    //agregar producto
    const addItem = (newProduct) => {
        const index = cartList.findIndex(prod => prod.id === newProduct.id)
        
        if(index === -1){
            setCartList([...cartList, newProduct])
        }else{
            const actualizoCartList = [...cartList]
            actualizoCartList[index].quantity += newProduct.quantity
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
    const totalBuys = () => cartList.reduce((total, prod) => total + prod.price * prod.quantity, 0) 
    
    //cantidad total de productos en carrito
    const totalInCart = () => cartList.reduce( (total, prod) => total + prod.quantity, 0) 

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


