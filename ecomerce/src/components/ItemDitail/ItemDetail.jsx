import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

import { Card, Container } from 'react-bootstrap'


function ItemDetail({id, img, title, price, category}) {

  const [isCant, setIsCant] = useState(true)

  const {addItem} = useCartContext()
  

  const handleOnAdd = (quantity) => {
    
    addItem({id, img, title, price, category, quantity})
    setIsCant(false)

  }
  

  return (
    <Card className='container d-flex flex-md-row py-3 w-75'>
         
        <Card.Img variant='center' src={img} alt="imagen del producto" style={ {width: '15rem', height: '15rem'} }/>
        <Container className=''>
          <Card.Title className='fs-4'>{category} {title}</Card.Title>
          <Card.Text className='fs-5'>Precio: ${price}</Card.Text>
            <Card.Text className=''> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam natus dolore praesentium officiis! In nam aperiam atque tenetur, 

            </Card.Text>

            {
              isCant
              ? <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
              : <>
                  <Link to='/cart' className='btn btn-outline-danger m-3'>Ir al Carrito</Link>
                  <Link to='/'className='btn btn-outline-success'>Continuar Comprando</Link>
                </>
            }
            
        </Container>
        
    </Card>
  )
}

export default ItemDetail