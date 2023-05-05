import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'



function Cart() {
    const {cartList, clearCart, cantidadCart, total} = useContext(CartContext)
    console.log(cartList)

    if (cantidadCart === 0) {
        return(
            <div className=''>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' >Realizar Compra</Link>
            </div>
        )
    }
    return (
        <div className=' d-flex flex-sm-column gap-5'>
            <h2 className='text-center pt-5 fs-1 fw-semibold'>Tu carrito</h2>
            <div className=" d-flex flex-column align-items-center gap-2 w-100">            
            
             { cartList.map( prod => <CartItem key = {prod.id} {...prod} /> ) }

            </div>

            <div className="carrito__acciones d-sm-flex justify-content-around">
                <div className="carrito__acciones--izquierda">
                    <button onClick={ clearCart } className='btn btn-outline-danger mx-2'>Vaciar Carrito</button>
                </div>

                <div className="carrito__acciones--derecha d-sm-flex gap-3">
                    <p className='carrito__acciones--total'>Total: $ { total }</p>
                    <Link className='btn btn-outline-info fw-semibold'>Checkout</Link>
                </div>
            </div>

        </div>
    )
}


export default Cart