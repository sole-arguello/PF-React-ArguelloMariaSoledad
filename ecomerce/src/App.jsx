//librerias 
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

//componentes creados por mi 
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
//import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


//estilos 
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return ( 
    <BrowserRouter>
       <NavBar />

       <Routes>
          <Route path='/' element={<ItemsListContainer greeting= {'Todos los Productos'}/>} />
          <Route path='/categoria/:prodCateg' element={<ItemsListContainer greeting={'Producto por Categoria'}/>} />
          
          <Route path='/item/:prodId' element={<ItemDetailContainer greeting= {'Detalle del producto'}/>} />


          <Route path='*' element={ <Navigate to='/'/> }/>
       </Routes>
      
    </BrowserRouter>
  );
}

export default App;
