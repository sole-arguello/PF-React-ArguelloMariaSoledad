
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo ( function ( { products } ) {
  
  return (
    <div className='row g-3 justify-content-center'>

        {products.map( prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
)
export default ItemList




