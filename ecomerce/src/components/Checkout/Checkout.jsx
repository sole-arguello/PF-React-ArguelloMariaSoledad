
import { useContext, useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


function Checkout({ greeting }) {

        const {cartList, totalBuys, clearCart} = useContext(CartContext)
        
        const [ordenId, setOrdenId] = useState(null);
        const [dataForm, setDataForm] = useState({
            name: '',
            phone: '',
            email: '',
        })
        
        const generateOrder = (evt) => {

            evt.preventDefault()
            const order = {}
            order.buyer = dataForm;
            order.items = cartList.map(({ titulo, id, precio, cantidad}) => ({id, titulo, precio, cantidad}))
            order.total = totalBuys()
    
            const dbFirestore = getFirestore()
            const orderCollection = collection (dbFirestore, 'orders')
            //insertar una orden a firebase
            addDoc(orderCollection, order)
            .then(resp => { setOrdenId(resp.id)})
            .catch( (err) => console.log(err) )
            .finally( () => { 
                setDataForm( {name: '', phone: '', email: ''} )  
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
        : (<div className='d-flex flex-column text-center align-items-center gap-5'>
            <h1 className='m-5'>{greeting}</h1>        
            <CheckoutForm generateOrder={generateOrder} handleForm={handleForm} dataForm={dataForm} />
          </div>)
     }
    </>
  )
}

export default Checkout