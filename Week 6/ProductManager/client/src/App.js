import React, { useState } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductForm from './components/ProductForm';
import Main from './views/Main';
import Detail from './components/Detail';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                <Route element={<Main/>} path="/" default /> 
                <Route element={ <Detail/> } path='/product/:id' />
              </Routes>
    	</BrowserRouter>
    </div>
  );
}

export default App;
