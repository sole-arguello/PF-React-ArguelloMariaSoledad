import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'



function Cart( { greeting })  {

    //defino estados para el form
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const {cartList, clearCart, totalEnCarrito, totalCompra} = useContext(CartContext)

    //funcion para el formulario
    const generarOrden = (evt) => {

        evt.preventDefault()
        
        //console.log('generando orden {buyer: {nombre: "sole", item: carrito, total: 2000}')
        const order = {}
        order.buyer = {name: "sole", phone: '225566', email: 'S@gmail.com'}

        order.items = cartList.map(({ titulo, id, precio, cantidad}) => ({id, titulo, precio, cantidad}))
        order.total = totalCompra()

        //console.log(order)

        
        const dbFirestore = getFirestore()
        //insertar una orden a firebase
        const orderCollection = collection (dbFirestore, 'orders')

        addDoc(orderCollection, order)
        .then(resp => console.log(resp))

        // //actualizar
        // const queryDoc = doc(dbFirestore, 'productos', 'OkZzho6LRN9j7RVogCnk')
        // updateDoc(queryDoc, {
        //     //propiedad que quiero cambiar
        //     cantidad: 99,
        // })
        // .finally( () => console.log('finalizo'))
        // .catch(err => console.log(err))
    }
    //console.log(totalCompra())

    //funcion para el form 
    const handleOnChange = () => {
        //para acceder es por target
        console.log('nombre del input', evt.target.name)
        console.log('valor del input ', evt.target.value)

        setDataForm({
            ...dataForm,
            //campo dinamico
            [evt.target.name]: evt.target.value
        })

    }
    console.log(dataForm)
 
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
            <h2 className='text-center pt-5 fs-1 fw-semibold'> { greeting } </h2>
            <div className=" d-flex flex-column align-items-center gap-2 w-100">            
            
             { cartList.map( prod => <CartItem key = {prod.id} {...prod} /> ) }

            </div>

            <div className="carrito__acciones d-sm-flex justify-content-around">
                <div className="carrito__acciones--izquierda">
                    <button onClick={ clearCart } className='btn btn-outline-danger mx-2'>Vaciar Carrito</button>
                </div>

                <div className="carrito__acciones--derecha d-sm-flex gap-3">
                    <p className='carrito__acciones--total'>Total: $ { totalCompra }</p>


                    <form onSubmit={generarOrden} className=''>
                        {/* manejar el input desde un estado con value*/}
                        <input onChange={handleOnChange} type="text" name='name' value={dataForm.name} placeholder='Ingrese el Nombre'/>

                        <input onChange={handleOnChange} type="text" name='phone' value={dataForm.phone} placeholder='Ingrese el Telefono'/>

                        <input onChange={handleOnChange} type="text" name='email' value={dataForm.email} placeholder='Ingrese el email'/>

                        {/* <input type="text" /> validar el mail*/}

                        {/* va al formulario desde app */}
                        <Link to='/formulario' className='btn btn-outline-info fw-semibold' >Checkout</Link>

                    </form>
                </div>
            </div>

        </div>
    )
}


export default Cart