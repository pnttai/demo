import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App'
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductFrom';

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/create' element={<AddProductForm/>}/>
            <Route path='/update/:id' element={<EditProductForm/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter;