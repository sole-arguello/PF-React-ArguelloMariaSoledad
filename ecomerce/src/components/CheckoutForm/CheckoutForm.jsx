
function CheckoutForm({handleForm, generateOrder, dataForm, errors, validateForm}) {
      const handleOnSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
          generateOrder()
        }
        
      }

  return (
    <div className="pb-5 mb-5 px-md-5 mx-lg-5">
      <form onSubmit={handleOnSubmit} className='px-3 px-md-5 mx-lg-5'>

        {errors && errors.name && <span className="text-danger me-auto"> {errors.name}</span>}
        <input className="my-2 w-100" onChange={handleForm} type="text" name='name' value={dataForm.name} placeholder='Ingrese el Nombre'/>
        
        {errors && errors.email && <span className="text-danger me-auto"> {errors.phone}</span>}
        <input className="my-2 w-100" onChange={handleForm} type="text" name='phone' value={dataForm.phone} placeholder='Ingrese el Telefono'/>
        
        {errors && errors.email && <span className="text-danger me-auto"> {errors.email}</span>}
        <input className="my-2 w-100" onChange={handleForm} type="text" name='email' value={dataForm.email} placeholder='Ingrese el email'/>
        
        {errors && errors.email && <span className="text-danger me-auto">{errors.email}</span>}
        <input className="my-2 w-100 mb-3" onChange={handleForm} type="text" name='emailConfirm' value={dataForm.emailConfirm} placeholder='Confirme el email'/>
        
        <button className="btn btn-outline-secondary w-50 my-5 " type="submit">Finalizar Compra</button>

      </form>       
    </div>
  )
}

export default CheckoutForm

