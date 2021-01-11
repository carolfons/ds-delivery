import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <>
    <ToastContainer />
      <Routes/>
    </>
  );
}

export default App;
