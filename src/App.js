
import './App.css';
import {  Routes,Route,BrowserRouter } from "react-router-dom";
import Land from './pages/land';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Land />} />
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
