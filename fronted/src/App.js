import './App.css';
import { Routes, Route } from "react-router-dom";
import ExtendedItem from './pages/ExtendedItem';
import {BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/HomePage";
function App() {
  
  return (
    < >
<BrowserRouter>   
  <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Product/:id" element={<ExtendedItem />}/>
    </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;

