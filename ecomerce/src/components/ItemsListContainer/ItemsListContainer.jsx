import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { getProductByCategory, getProductos } from "../../utils/mockFetch";
import { Container } from 'react-bootstrap'
//componentes
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";


function ItemsListContainer({ greeting }) {
  
    const [productos, setProductos ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    
    const { prodCateg } = useParams()
    useEffect(() => {
      
        setTimeout(() => {
            //console.log(prodCateg)

            const mockFetch = prodCateg ? getProductByCategory : getProductos

            mockFetch(prodCateg)
              .then(respuesta => {
                setProductos(respuesta)
              })
              .catch(err => console.log(err))
              .finally( () => setIsLoading(false))
        }, 1000);
        
    }, [prodCateg])

    // useEffect( () => {
    //   setTimeout( () => {
    //     const dbFirestore = getFirestore()
    //     const queryCollection = collection(dbFirestore, 'productos')

    //     getDocs(queryCollection)
    //       .then(resp => setProductos(resp.docs.map( producto => ( { id: producto.id, ...producto.data() } ))))
    //       .catch(err => console.log(err))
    //       .finally( () => setIsLoading(false))
    //   }, 1000)
    // }, [])


  return (
    <>
      <h1 className="py-5 text-center">{greeting}</h1>
      <Container>
          { isLoading 
          ? <Loading/>
          : <ItemList productos = { productos }/> }
      </Container>
    </> 
  );
}

export default ItemsListContainer;
