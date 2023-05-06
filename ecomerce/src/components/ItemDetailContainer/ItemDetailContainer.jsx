import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Spinner } from 'react-bootstrap'
import ItemDetail from '../ItemDitail/ItemDetail'
import { getProductoById } from '../../utils/mockFetch'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



function ItemDetailContainer({greeting}) {

    const [ producto, setProducto ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    const { prodId } = useParams()
    //console.log(prodId)

    useEffect( () => {
      setTimeout( () => {
        //guardo mi db
        const dbFirestore = getFirestore()
        //guardo 1 producto por su id
        const queryDoc = doc(dbFirestore, 'productos', prodId)
        
        //traigo un producto por su id
        getDoc(queryDoc)
          .then(resp => setProducto(({ id: resp.id, ...resp.data()})))
          .catch( (err) => console.log(err))
          .finally(() => setIsLoading(false))
      }, 1000)  
    }, [prodId])
  return (
    <Container>
        <h1 className='py-5 text-center'>{ greeting }</h1>
        { isLoading 
        ? <div className='text-center'><Spinner animation="border" variant="warning" /></div> 
        : <ItemDetail {...producto}/> }  
    </Container>
  )
}

export default ItemDetailContainer