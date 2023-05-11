import { useState } from 'react'
import { Button, Container} from 'react-bootstrap'


function ItemCount( { initial, stock, onAdd }) {

    const [ quantity, setquantity ] = useState (initial)
  
    const add = () => {
      if (quantity < stock) {
        setquantity(quantity + 1)
      }
    }
  
    const subtract = () => {
      if (quantity > 1) {
        setquantity(quantity - 1)
      }
    }
  return (
   
    <Container className='py-3'>
         <Container className='d-flex py-1'>
            <Button variant='warning border-secondary' onClick={subtract} > - </Button>
            <h4 className='px-3 '> {quantity} </h4>
            <Button variant='warning border-secondary' onClick={add} > + </Button>
         </Container>
        
         <Button variant="warning border-secondary my-3" onClick={ () => onAdd(quantity)} disabled = {!stock}>Agregar al carrito</Button>
    </Container>
  )
}

export default ItemCount