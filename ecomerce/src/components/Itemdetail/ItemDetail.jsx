import React from 'react'
import { Card, Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'


function ItemDetail({img, titulo, precio, categoria}) {

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
            <ItemCount initial={1} stock={10} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)}/>
        </Container>
        
    </Card>
  )
}

export default ItemDetail