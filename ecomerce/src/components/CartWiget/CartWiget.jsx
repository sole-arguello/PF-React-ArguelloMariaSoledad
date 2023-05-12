import React, { useContext } from 'react'
import '../CartWiget/cartWiget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function CartWiget() {

  const { totalInCart } = useContext(CartContext)
  return (
    <div className='cartWiget border border-dark p-1 rounded'>

      <Link to='/cart' className='d-flex text-decoration-none text-dark'>
        <img className='mx-2 ' src="dist/cart4.svg" alt="" style={{ width: '1.5rem'}}/>
        <span className=' fs-5 fw-semibold mx-1' style={{display: totalInCart() > 0 ? 'block' : 'none'}}>{totalInCart()}</span>
      </Link>
       
    </div>
  )
}

export default CartWiget