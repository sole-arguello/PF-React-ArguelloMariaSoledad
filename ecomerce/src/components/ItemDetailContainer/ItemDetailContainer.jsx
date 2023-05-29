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
        
        const queryDoc = doc(dbFirestore, 'products', prodId)
        
        getDoc(queryDoc)
          .then(resp => setProduct(({ id: resp.id, ...resp.data()})))
          .catch( (err) => console.log(err))
          .finally( () => setIsLoading(false))
      }, 1000)  
    }, [prodId])
  return (
    <Container className='h-100 mb-5 pb-5'>
        <h1 className='my-4 text-center'>{ greeting }</h1>
        { isLoading 
        ? <div className='text-center vh-100'><Spinner  animation="border" variant="warning" /></div> 
        : <ItemDetail {...product}/> }  
    </Container>
  )
}

export default ItemDetailContainer