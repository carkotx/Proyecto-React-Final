import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Saludo from './components/Saludo';

// SI quiero agregar un componente afuera de navbar lo hacemos aqui
// debajo de <Navbar/>
const App = () => {
   return (
    <>
  
      <Navbar/>
      <Saludo/>
   </>

   );
}
export default App; 