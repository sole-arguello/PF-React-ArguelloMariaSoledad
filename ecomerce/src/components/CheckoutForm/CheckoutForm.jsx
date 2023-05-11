
function CheckoutForm({handleForm, generateOrder, dataForm}) {

    
  return (
    <>
      <form onSubmit={generateOrder} className=' d-flex flex-column gap-5'>
       
        <input onChange={handleForm} type="text" name='name' value={dataForm.name} placeholder='Ingrese el Nombre'/>

        <input onChange={handleForm} type="text" name='phone' value={dataForm.phone} placeholder='Ingrese el Telefono'/>

        <input onChange={handleForm} type="text" name='email' value={dataForm.email} placeholder='Ingrese el email'/>

        <input onChange={handleForm} type="text" name='email' value={dataForm.email} placeholder='Confirme el email'/>

        <button className="btn btn-outline-secondary w-50" type="submit">Finalizar Compra</button>

      </form>       
    </>
  )
}

export default CheckoutForm

