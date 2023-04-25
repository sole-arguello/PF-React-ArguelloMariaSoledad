import React from 'react'
import '../CartWiget/cartWiget.css'
//import '../CartWiget/cartWiget.scss'
function CartWiget() {
  return (
    <div className='cartWiget d-flex border border-dark p-1 rounded'>
       <img className='mx-2 ' src="/public/cart4.svg" alt="" style={{ width: '1.5rem'}}/>
       <h5 className='mx-1'>0</h5>
    </div>
  )
}

export default CartWiget