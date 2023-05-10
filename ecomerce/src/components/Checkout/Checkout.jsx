
import { useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { addDoc, collection, getFirestore } from 'firebase/firestore'


function Checkout({cartList, totalCompra}) {
        
        //defino estados para el form
        const [dataForm, setDataForm] = useState({
            name: '',
            phone: '',
            email: '',
        })
        
        const generarOrden = (evt) => {

            evt.preventDefault()
            const order = {}
            order.buyer = dataForm;
            order.items = cartList.map(({ titulo, id, precio, cantidad}) => ({id, titulo, precio, cantidad}))
            order.total = totalCompra()
            //console.log(order)
    
            const dbFirestore = getFirestore()
            const orderCollection = collection (dbFirestore, 'orders')
            //insertar una orden a firebase
            addDoc(orderCollection, order)
            .then(resp => console.log(resp))
        }
        //console.log(totalCompra())
    
        //funcion para el form 
        const handleOnChange = (evt) => {
            //para acceder es por target
            console.log('nombre del input', evt.target.name)
            console.log('valor del input ', evt.target.value)
    
            setDataForm({
                ...dataForm,
                //campo dinamico
                [evt.target.name]: evt.target.value
            })
    
        }
        //console.log(dataForm)


  return (
    <div>
        <h1>Checkout</h1>
        {/* aca va el componete form */}
        
        <CheckoutForm generarOrden={generarOrden} handleOnChange={handleOnChange} dataForm={dataForm} />


    </div>
  )
}

export default Checkout