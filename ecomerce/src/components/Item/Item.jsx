import { memo } from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'


  const Item = memo ( function ( {id, title, img, price, category} ) {
    return (
  
      <CardGroup className='col-lg-3 col-md-6 col-sm-10'>
          <Card className="card w-100 mh-100"  key={id}>
              <Card.Img variant="top" src={img} alt="imagen card" />
              <Card.Body >
                <Card.Title className='fs-4'>{category} {title}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Link to={`/item/${id}`}>
                  <Button variant="outline-warning text-secondary">Ver Detalle</Button>
                </Link>
                
              </Card.Footer>
          </Card>
      </CardGroup>
    
    )
  }
)

export default Item