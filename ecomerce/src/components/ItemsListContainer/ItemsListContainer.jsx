import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
//componentes
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
//estilos
import { Container } from 'react-bootstrap'


function ItemsListContainer({ greeting }) {
  
    const [products, setProducts ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    
    const { prodCateg } = useParams()

    useEffect( () => {
      setTimeout( () => {
  
        const dbFirestore = getFirestore()
      
        const categoryRef = prodCateg
              ? query(collection(dbFirestore, 'products'), where ('category', '==', prodCateg))
              : collection ( dbFirestore, 'products')         

        getDocs(categoryRef)
           .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
           .catch(err => console.log(err))
           .finally(() => setIsLoading(false))
      }, 1000)
    }, [prodCateg])


  return (
    <>
      <h1 className="py-5 text-center">{greeting}</h1>
      <Container>
          { isLoading 
          ? <Loading/>
          : <ItemList products={products}/> }
      </Container>
    </> 
  );
}

export default ItemsListContainer;
