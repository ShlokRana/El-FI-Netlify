import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './component/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

      <Routes>
        <Route path="/" element={<Home/>} >
      </Route>          
      </Routes>            
    </div>
  );
}


export default App;
