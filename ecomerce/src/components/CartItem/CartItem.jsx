
import { useCartContext } from '../../context/CartContext'

function CartItem() {

    const {cartList, clearCart} = useCartContext()
    console.log(cartList)
  return (
    <div>
        {
            cartList.map( prod => {

                <>
                <img src ={prod.img} />
                <p>{prod.categiria} - {prod.titulo}</p>
                <p>$ {prod.precio}</p>
                <button>X</button>
                <p>SubTotal: </p>
                </>
            })
        }

        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartItem