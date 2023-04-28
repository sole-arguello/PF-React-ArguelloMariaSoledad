import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'

import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ItemDetail({img, titulo, precio, categoria}) {

  //para la condicion
  const [isCant, setIsCant] = useState(true)

  const {addItem} = useCartContext()
  

  const handleOnAdd = (cantidad) => {
    //console.log(cantidad)
    addItem({img, titulo, precio, categoria, cantidad})
    setIsCant(false)
    //console.log("cantidad agregada: " , cantidad)
  }
  

  return (
    <Card className='container d-flex flex-md-row py-3'>
         
        <Card.Img variant='' src={img} alt="imagen del producto" />
        <Container className=''>
          <Card.Title className='fs-4'>{categoria} {titulo}</Card.Title>
          <Card.Text className='fs-5'>Precio: ${precio}</Card.Text>
            <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam natus dolore praesentium officiis! In nam aperiam atque tenetur, 
                labore alias est ipsum quas, molestiae accusamus rerum! Molestias 
                architecto tempora odit?
            </Card.Text>

            {
              isCant
              ? <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
              : <>
                  <Link to='/cart' className='btn btn-outline-danger mx-2'>Finalizar Compra</Link>
                  <Link to='/'className='btn btn-outline-success'>Continuar Comprando</Link>
                </>
            }
            
        </Container>
        
    </Card>
  )
}

export default ItemDetail