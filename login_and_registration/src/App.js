
import './App.css';
import { Homepage } from "./components/Homepage/Homepage";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import {BrowserRouter, Routes,Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/home"  element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
