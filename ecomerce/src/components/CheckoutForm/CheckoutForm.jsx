
function CheckoutForm({handleForm, generateOrder, dataForm, errors}) {
    
  return (
    <div className="mx-5 px-5">
      <form onSubmit={generateOrder} className=' d-flex flex-column gap-5 mx-5 px-5'>
       
        <input onChange={handleForm} type="text" name='name' value={dataForm.name} placeholder='Ingrese el Nombre'/>
        {errors && errors.name && <span>{errors.name}</span>}
        <input onChange={handleForm} type="text" name='phone' value={dataForm.phone} placeholder='Ingrese el Telefono'/>
        {errors && errors.email && <span>{errors.phone}</span>}
        <input onChange={handleForm} type="text" name='email' value={dataForm.email} placeholder='Ingrese el email'/>
        {errors && errors.email && <span>{errors.email}</span>}
        <input onChange={handleForm} type="text" name='emailConfim' value={dataForm.email} placeholder='Confirme el email'/>
        {errors && errors.email && <span>{errors.emailConfirm}</span>}
        <button className="btn btn-outline-secondary w-50" type="submit">Finalizar Compra</button>

      </form>       
    </div>
  )
}

export default CheckoutForm

