//librerias 
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";  
//componentes  
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
//estilos 

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return ( 
    <CartProvider>
      <BrowserRouter>
       <NavBar />

       <Routes>
          <Route path='/' element={<ItemsListContainer greeting= {'Todos los Productos'}/>} />
          <Route path='/category/:prodCateg' element={<ItemsListContainer greeting={'Producto por Categoria'} />} />
          
          <Route path='/item/:prodId' element={<ItemDetailContainer greeting= {'Detalle del producto'} />} />
          <Route path='/cart' element={<Cart greeting= {'Tu Carrito'} />} />

          <Route path='/ckeckout' element={ <Checkout greeting={ 'Complete el Formulario' }/> } />

          <Route path='*' element={ <Navigate to='/'/> }/>

       </Routes>
      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
