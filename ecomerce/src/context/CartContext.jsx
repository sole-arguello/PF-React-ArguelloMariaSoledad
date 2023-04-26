import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({children}) => {

    //carrito comienza vacio
    const [cartList, setCartList] = useState([])
    console.log(cartList)

    //agregar producto
    const addItem = (newProducts) => {

        setCartList([...cartList, newProducts])

    }

    //remover item

    //vaciar carrito
    const clearCart = () => {
        setCartList([])
    }   

// ---------------------------------------
    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clearCart,

        }}>
            { children }
        </CartContext.Provider>
    )
}


        // const existsItem = cartList.some(prod => prod.id === itemId)
        // console.log(existsItem)
        // if(!existsItem){
        //     setCartList([...cartList, newProducts])
        //     console.log()
        // }else{
        //     console.log("producto repetido")
        // }