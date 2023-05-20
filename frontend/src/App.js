import './App.css';
import React from 'react';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddDonation from './components/AddDonation';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      
        <Header/>

        <Routes>
          <Route path='/add' element={<AddDonation/>}></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
