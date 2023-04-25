import { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


function ItemDetail({img, titulo, precio, categoria}) {

  const [isCant, setIsCant] = useState(true)

  const handleOnAdd = () => {
    setIsCant(false)
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
                  <Link to='/cart' >Finalizar Compra</Link>
                  <Link to='/' >Continuar Comprando</Link>
                </>
            }
            
        </Container>
        
    </Card>
  )
}

export default ItemDetail