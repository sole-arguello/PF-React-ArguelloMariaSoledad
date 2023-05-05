
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo ( ( { productos } )  => {
  console.log('ItemList')
  return (
    <div className='row g-3 justify-content-center'>

        {productos.map( prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
)
export default ItemList
// memo(
//   function ItemList({productos}) {
//     return (
//       <div className='row g-3 justify-content-center'>
  
//         {productos.map( prod => <Item key={prod.id} {...prod}/>)}
  
//       </div>
//     )
//   }

// ) 



