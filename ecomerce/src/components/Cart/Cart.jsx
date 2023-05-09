import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'



function Cart() {
    const {cartList, clearCart, totalEnCarrito, totalCompra} = useContext(CartContext)

    //funcion para el formulario
    const generarOrden = () => {
        //console.log('generando orden {buyer: {nombre: "sole", item: carrito, total: 2000}')
        const order = {}
        order.buyer = {name: "sole", phone: '225566', email: 'S@gmail.com'}
        order.items = cartList.map(({ titulo, id, precio, cantidad}) => ({id, titulo, precio, cantidad}))
        order.total = totalCompra()
        console.log(order)

        //insertar la ordenh a firebase
        const dbFirestore = getFirestore()
        const orderCollection = collection (dbFirestore, 'orders')

        addDoc(orderCollection, order)
            .then(resp => console.log(resp))
    }
    
 
    if (totalEnCarrito === 0) {
        return(
            <div className='text-center'>
                <h1 className=' display-5 fw-semibold my-5 text-danger'>No hay productos en el carrito</h1>
                <Link to='/' className='btn btn-outline-primary fw-semibold fs-5'>Realizar Compra</Link>
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
                    <p className='carrito__acciones--total'>Total: $ { totalCompra }</p>
                    <Link className='btn btn-outline-info fw-semibold' onClick={generarOrden}>Checkout</Link>

                   
                </div>
            </div>

        </div>
    )
}


export default Cart