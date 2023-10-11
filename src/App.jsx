import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeNavbar from './components/PokeNavbar'
import Home from "./views/Home";
import Pokemons from './views/Pokemons'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <PokeNavbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pokemons" element={<Pokemons />} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}