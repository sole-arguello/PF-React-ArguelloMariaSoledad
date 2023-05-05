
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo ( function ( { productos } ) {
  console.log('ItemList')
  return (
    <div className='row g-3 justify-content-center'>

        {productos.map( prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
)
export default ItemList




