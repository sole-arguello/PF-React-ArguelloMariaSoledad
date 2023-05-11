import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Spinner } from 'react-bootstrap'
import ItemDetail from '../ItemDitail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



function ItemDetailContainer({greeting}) {

    const [ product, setProduct ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    const { prodId } = useParams()
    

    useEffect( () => {
      setTimeout( () => {
        
        const dbFirestore = getFirestore()
        
        const queryDoc = doc(dbFirestore, 'product', prodId)
        
        getDoc(queryDoc)
          .then(resp => setProduct(({ id: resp.id, ...resp.data()})))
          .catch( (err) => console.log(err))
          .finally(() => setIsLoading(false))
      }, 1000)  
    }, [prodId])
  return (
    <Container>
        <h1 className='py-5 text-center'>{ greeting }</h1>
        { isLoading 
        ? <div className='text-center'><Spinner animation="border" variant="warning" /></div> 
        : <ItemDetail {...product}/> }  
    </Container>
  )
}

export default ItemDetailContainer