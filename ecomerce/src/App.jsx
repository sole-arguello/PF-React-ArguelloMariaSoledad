//librerias 
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";  

//componentes creados por mi 
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
//import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


//estilos 
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return ( 
    <CartProvider>
      <BrowserRouter>
       <NavBar />

       <Routes>
          <Route path='/' element={<ItemsListContainer greeting= {'Todos los Productos'}/>} />
          <Route path='/categoria/:prodCateg' element={<ItemsListContainer greeting={'Producto por Categoria'}/>} />
          
          <Route path='/item/:prodId' element={<ItemDetailContainer greeting= {'Detalle del producto'}/>} />
          <Route path='/cart' element={<Cart/>} />



          <Route path='*' element={ <Navigate to='/'/> }/>
       </Routes>
      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
