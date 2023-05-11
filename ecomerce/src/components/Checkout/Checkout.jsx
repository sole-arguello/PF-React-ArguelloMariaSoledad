import { useContext, useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { checkoutValidacion } from '../CheckoutForm/checkoutValidation'

const CheckoutValidacion = checkoutValidacion(CheckoutForm)

function Checkout({ greeting }) {

        const {cartList, totalBuys, clearCart} = useContext(CartContext)
        
        const [ordenId, setOrdenId] = useState(null);
        const [dataForm, setDataForm] = useState({name: '', phone: '', email: '', emailConfirm: ''})
        
        const generateOrder = () => {

            const order = {}
            order.buyer = dataForm;
            order.items = cartList.map(({ title, id, price, quantity}) => ({id, title, price, quantity}))
            order.total = totalBuys()
    
            const dbFirestore = getFirestore()
            const orderCollection = collection (dbFirestore, 'orders')
            //insertar una orden a firebase
            addDoc(orderCollection, order)
            .then(resp => { setOrdenId(resp.id)})
            .catch( (err) => console.log(err) )
            .finally( () => { 
                setDataForm( {name: '', phone: '', email: '', emailConfirm: ''} )  
                setTimeout( () => { clearCart() }, 2000)
            }) 
        }
    
        const handleForm = (evt) => {  

            setDataForm({
                ...dataForm,
                [evt.target.name]: evt.target.value
            })
    
        }

  return (
    <>
     {
        ordenId 
        ? (<div className='text-center m-5'>
                <h1 >El id de su orden es: </h1>
                <p className=' fs-4 fw-semibold my-5 text-success'>{ ordenId}</p>
                <p className=' fs-3'>Gracias por su compra!!</p>
                <Link className='btn btn-warning fw-semibold text-dark my-5' to='/'>Volver al Inicio</Link>
          </div>)
        : (<div className='d-flex flex-column text-center mx-5 px-5 gap-5 w-75'>
            <h1 className='m-5'>{greeting}</h1>        
            <CheckoutValidacion generateOrder={generateOrder} handleForm={handleForm} dataForm={dataForm} />
          </div>)
     }
    </>
  )
}

export default Checkout