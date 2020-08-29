import React from 'react';
import './App.css';
import Catalogo from './components/Catalogo'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar tittle="AppVehiculos"/>
      <Catalogo tittle="Catalogo De Vehiculos"/>
    </div>
  );
}

export default App;
