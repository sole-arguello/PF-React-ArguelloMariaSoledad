import { useCartContext } from '../../context/CartContext'
import '../CartItem/cartItem.css'

function CartItem() {
    const {cartList, clearCart, removeItem} = useCartContext()
    console.log(cartList)
    return (
        <div className=' d-flex flex-sm-column gap-5'>
            <h2 className='text-center pt-5 fs-1 fw-semibold'>Tu carrito</h2>
            <div className=" d-flex flex-column align-items-center gap-2 w-100">            
            {
                cartList.map( prod => {  

                    return(
                        <div className='carrito__producto p-sm-5 d-md-flex flex-md-row p-lg-3 align-items-sm-center gap-lg-5 card bg-light' >
                            
                            <img src={prod.img} className='carrito__producto--imag' />
                            
                            <div className='d-lg-flex'>
                                <div className='carrito__producto--titulo px-md-3'>
                                    <small className=''>Titulo</small>
                                    <div className="carrito__producto--TituloCatg d-sm-flex gap-sm-2 d-lg-block">
                                        <h4 className=''>{prod.categoria} </h4>
                                        <h4 className=''>{prod.titulo}</h4>
                                    </div>
                                </div>

                                <div className='p-md-3 d-lg-flex gap-lg-3'>
                                    <div className='carrito__producto--precio d-sm-flex d-lg-block gap-3 px-md-2'>
                                        <small>Precio</small>
                                        <p className=' fw-semibold'>$ {prod.precio}</p>
                                    </div>

                                    <div className="carrito__producto--subTotal d-sm-flex d-lg-block gap-3 px-md-2">
                                        <small>Subtotal</small>
                                        <p className=' fw-semibold'>$ {prod.precio * prod.cantidad}</p>
                                    </div>

                                    <div className="carrito__producto--cantidad d-flex gap-5 align-items-center">
                                        <div className='d-sm-flex d-lg-block gap-sm-3'>
                                            <small>Cantidad</small>
                                            <p className='text-center  fw-semibold'> {prod.cantidad}</p>
                                        </div>
                                        <button className='carrito__producto--delete btn btn-danger ' onClick={() => removeItem(prod.id)}>X</button>
                                    </div>
                                </div>  
                            </div>
                       
                        </div>
                    )
                })
            }
            </div>

            <div className="carrito__acciones d-sm-flex justify-content-around">
                <div className="carrito__acciones--izquierda">
                    <button onClick={clearCart} className='btn btn-outline-danger mx-2'>Vaciar Carrito</button>
                </div>

                <div className="carrito__acciones--derecha d-sm-flex gap-3">
                    <p className='carrito__acciones--total'>Total: $ {cartList.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)}</p>
                    <button className='btn btn-outline-info fw-semibold'>Comprar Ahora</button>
                </div>
            </div>

        </div>
    )
}

export default CartItem