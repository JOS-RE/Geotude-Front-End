
import './App.css';
import {  Routes,Route,BrowserRouter } from "react-router-dom";
import Land from './pages/land';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Land />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
