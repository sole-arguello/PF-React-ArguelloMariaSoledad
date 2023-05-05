import React, { useContext } from 'react'
import '../CartWiget/cartWiget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
//import '../CartWiget/cartWiget.scss'
function CartWiget() {

  const { totalEnCarrito } = useContext(CartContext)
  return (
    <div className='cartWiget border border-dark p-1 rounded' 
    style={{display: totalEnCarrito > 0 ? 'block' : 'none'}}>

      <Link to='/cart' className='d-flex text-decoration-none text-dark'>
        <img className='mx-2 ' src="/public/cart4.svg" alt="" style={{ width: '1.5rem'}}/>
        <span className=' fs-5 fw-semibold mx-1'>{totalEnCarrito}</span>
      </Link>
       
    </div>
  )
}

export default CartWiget