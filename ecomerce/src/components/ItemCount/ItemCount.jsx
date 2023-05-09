import React, { useState } from 'react'
import { Button, Container} from 'react-bootstrap'


function ItemCount( { initial, stock, onAdd }) {

    const [ cantidad, setCantidad ] = useState (initial)
  
    const sumar = () => {
      if (cantidad < stock) {
        setCantidad(cantidad + 1)
      }
    }
  
    const restar = () => {
      if (cantidad > 1) {
        setCantidad(cantidad - 1)
      }
    }
  return (
   
    <Container className='py-3'>
         <Container className='d-flex py-1'>
            <Button variant='warning border-secondary' onClick={restar} > - </Button>
            <h4 className='px-3 '> {cantidad} </h4>
            <Button variant='warning border-secondary' onClick={sumar} > + </Button>
         </Container>
        
         <Button variant="warning border-secondary my-3" onClick={ () => onAdd(cantidad)} disabled = {!stock}>Agregar al carrito</Button>
    </Container>
  )
}

export default ItemCount