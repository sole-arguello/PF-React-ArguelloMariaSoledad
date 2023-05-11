import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
//componentes
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
//estilos
import { Container } from 'react-bootstrap'


function ItemsListContainer({ greeting }) {
  
    const [product, setProduct ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    
    const { prodCateg } = useParams()

    useEffect( () => {
      setTimeout( () => {
  
        const dbFirestore = getFirestore()
      
        const categoryRef = prodCateg
              ? query( collection ( dbFirestore, 'product'), where ( 'category', '==', prodCateg ) )
              : collection ( dbFirestore, 'product')         

        getDocs(categoryRef)
           .then(resp => setProduct(resp.docs.map( prod => ( { id: prod.id, ...prod.data() } ))))
           .catch(err => console.log(err))
           .finally( () => setIsLoading(false))
      }, 1000)
    }, [prodCateg])


  return (
    <>
      <h1 className="py-5 text-center">{greeting}</h1>
      <Container>
          { isLoading 
          ? <Loading/>
          : <ItemList product = { product }/> }
      </Container>
    </> 
  );
}

export default ItemsListContainer;
