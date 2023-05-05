import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import '../CartItem/cartItem.css'


function CartItem({id, precio, img, titulo, categoria, cantidad}) {
    const {removeItem, cartList} = useContext(CartContext)
    console.log(cartList)
    return(
        <div className='p-sm-5 d-md-flex flex-md-row p-lg-3 align-items-sm-center gap-lg-5 card bg-light' >
            
            <img src={img} className='carrito__producto--imag' />
            
            <div className='d-lg-flex'>
                <div className='px-md-3'>
                    <small className=''>Titulo</small>
                    <div className="d-sm-flex gap-sm-2 ">
                        <h4 className=''>{categoria} </h4>
                        <h4 className=''>{titulo}</h4>
                    </div>
                </div>
    
                <div className='p-md-3 d-lg-flex gap-lg-3'>
                    <div className=' d-sm-flex d-lg-block gap-3 px-md-2'>
                        <small>Precio</small>
                        <p className=' fw-semibold'>$ {precio}</p>
                    </div>
    
                    <div className=" d-sm-flex d-lg-block gap-3 px-md-2">
                        <small>Subtotal</small>
                        <p className=' fw-semibold'>$ {precio * cantidad}</p>
                    </div>
    
                    <div className=" d-flex gap-5 align-items-center">
                        <div className='d-sm-flex d-lg-block gap-sm-3 '>
                            <small>Cantidad</small>
                            <p className='fw-semibold text-center'> {cantidad}</p>
                        </div>
                        <button className='btn btn-danger ' onClick={() => removeItem(id)}>X</button>
                    </div>
                </div>  
            </div>
       
        </div>
    )
}

export default CartItem

