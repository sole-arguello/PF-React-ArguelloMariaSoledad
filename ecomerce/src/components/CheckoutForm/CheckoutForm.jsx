import { Link } from "react-router-dom"


function CheckoutForm({handleOnChange, generarOrden, dataForm}) {

    
  return (
    <div>
      <form onSubmit={generarOrden} className=''>
        {/* manejar el input desde un estado con value*/}
        <input onChange={handleOnChange} type="text" name='name' value={dataForm.name} placeholder='Ingrese el Nombre'/>

        <input onChange={handleOnChange} type="text" name='phone' value={dataForm.phone} placeholder='Ingrese el Telefono'/>

        <input onChange={handleOnChange} type="text" name='email' value={dataForm.email} placeholder='Ingrese el email'/>

        {/* <input type="text" /> validar el mail*/}
        <button type="submit">Finalizar Compra</button>

      </form>       
    </div>
  )
}

export default CheckoutForm

