import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonForm from './components/PersonForm';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

const App = () => {
  return (
    <div className="App">
          	<BrowserRouter>
              <Routes>
	                <Route element={<Main/>} path="/" default />
                  <Route element={<Detail/>} path= "/people/:id" />
                  <Route element={<Update/>} path="/people/edit/:id"/>
              </Routes>
    	      </BrowserRouter>
    </div>
  );
}

export default App;
