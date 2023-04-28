import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({children}) => {

    //carrito comienza vacio
    const [cartList, setCartList] = useState([])
    console.log(cartList)

    //agregar producto
    const addItem = (newProduct) => {

        //Busca el índice del primer elemento en el array carList que tenga el mismo id que el nuevo elemento
        //si el indice es -1 quiere decir que no esta y lo agrega y si no es -1 existe y se debe actualizar
        const index = cartList.findIndex(prod => prod.id === newProduct.id)
        console.log(index)
        if(index === -1){
            //Si !id al que esta se agrega el nuevo elemento al carrito
            setCartList([...cartList, newProduct])
        }else{
            //Si el id es = se actualiza su cantidad en lugar de agregar un nuevo elemento
            const actualizoCartList = [...cartList]
            actualizoCartList[index].cantidad += newProduct.cantidad
            setCartList(actualizoCartList)
        }
        

    }

    //remover item
    const removeItem = (itemId) =>{
        const item = cartList.filter( prod => prod.id !== itemId)
        setCartList(item)
    }

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
            removeItem
        }}>
            { children }
        </CartContext.Provider>
    )
}


