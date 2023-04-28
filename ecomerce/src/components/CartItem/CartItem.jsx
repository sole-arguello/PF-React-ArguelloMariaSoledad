
import { useCartContext } from '../../context/CartContext'


function CartItem() {

    const {cartList, clearCart, removeItem} = useCartContext()
    console.log(cartList)
  return (
    <div className='container'>
        {
            cartList.map( prod => {

                return(
                    <div className='d-lg-flex justify-content-around'>
                    <img src ={prod.img} className='w-25'/>
                    <p>{prod.categoria} {prod.titulo}</p>
                    <p>$ {prod.precio}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <button onClick={() => removeItem(prod.id)}>X</button>
                    <p>SubTotal: {prod.precio * prod.cantidad}</p>
                    </div>
                )
            })
        }
        <p>Total: {cartList.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)}</p>
        

        <button onClick={clearCart} className='btn btn-outline-danger mx-2'>Vaciar Carrito</button>
        <button className='btn btn-outline-info fw-semibold'>Confirmar Compra</button>
    </div>
  )
}

export default CartItem