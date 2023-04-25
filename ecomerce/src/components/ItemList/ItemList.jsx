import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}) {
  return (
    <div className='row g-3 justify-content-center'>

      {productos.map( prod => <Item key={prod.id} {...prod}/>)}

    </div>
  )
}

export default ItemList

