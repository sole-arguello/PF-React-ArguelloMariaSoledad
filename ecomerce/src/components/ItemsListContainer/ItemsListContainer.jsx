import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
//import { getProductByCategory, getProductos } from "../../utils/mockFetch";
import { Container } from 'react-bootstrap'
//componentes
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";


function ItemsListContainer({ greeting }) {
  
    const [productos, setProductos ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    
    const { prodCateg } = useParams()
    console.log(prodCateg)

    useEffect( () => {
      setTimeout( () => {
        //guardo mi db
        const dbFirestore = getFirestore()
        //muestro x categoria o todos los productos
        const categoryRef = prodCateg
              ? query( collection ( dbFirestore, 'productos'), where ( 'categoria', '==', prodCateg ) )
              : collection ( dbFirestore, 'productos')         

        getDocs(categoryRef)
           .then(resp => setProductos(resp.docs.map( prod => ( { id: prod.id, ...prod.data() } ))))
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
          : <ItemList productos = { productos }/> }
      </Container>
    </> 
  );
}

export default ItemsListContainer;
