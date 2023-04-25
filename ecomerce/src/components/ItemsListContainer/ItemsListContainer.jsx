import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory, getProductos } from "../../utils/mockFetch";
import { Spinner, Container } from 'react-bootstrap'
//componentes
import ItemList from "../ItemList/ItemList";


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

  return (
    <>
      <h1 className="py-5 text-center">{greeting}</h1>
      <Container>
          { isLoading 
          ? <div className=" text-center"> <Spinner animation="border" variant="warning" /></div> 
          : <ItemList productos = { productos }/> }
      </Container>
    </> 
  );
}

export default ItemsListContainer;
