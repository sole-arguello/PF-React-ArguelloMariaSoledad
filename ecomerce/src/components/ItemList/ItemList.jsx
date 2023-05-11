import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo ( function ( { product } ) {

  return (
    <div className='row g-3 justify-content-center'>

        {product.map( prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
)
export default ItemList




