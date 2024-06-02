import React from 'react';
import './App.css';
//import EatForm from './components/EatForm';
import EatList from './components/EatList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className='letsEat'>
      <NavbarComp/>
      <EatList/>
    </div>
  );
}

export default App;
