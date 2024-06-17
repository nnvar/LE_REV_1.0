import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import List from './pages/List';
import Home from './pages/Home';
import Layout from "./pages/Layout";

function App() {
  return ( 
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home />}/>
              <Route path="list" element={<List/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

