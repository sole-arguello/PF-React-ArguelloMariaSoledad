import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'

import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ItemDetail({id, img, titulo, precio, categoria}) {

  //para la condicion
  const [isCant, setIsCant] = useState(true)

  const {addItem} = useCartContext()
  

  const handleOnAdd = (cantidad) => {
    //console.log(cantidad)
    addItem({id, img, titulo, precio, categoria, cantidad})
    setIsCant(false)
    //console.log("cantidad agregada: " , cantidad)
  }
  

  return (
    <Card className='container d-flex flex-md-row py-3 w-75'>
         
        <Card.Img variant='center' src={img} alt="imagen del producto" style={ {width: '15rem', height: '15rem'} }/>
        <Container className=''>
          <Card.Title className='fs-4'>{titulo}</Card.Title>
          <Card.Text className='fs-5'>Precio: ${precio}</Card.Text>
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