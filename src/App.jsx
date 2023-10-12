import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeNavbar from './components/PokeNavbar'
import PokeHome from "./views/PokeHome";
import Pokemons from './views/Pokemons'
import PokeDetalles from "./views/PokeDetalles";
import PokError from './views/PokError';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <PokeNavbar />
        <Routes>
         <Route path="/" element={<PokeHome />} />
         <Route path="/Pokemons" element={<Pokemons />} />
         <Route path='/PokeDetalles/:name' element={<PokeDetalles />} />
         <Route path="/PokError" element={<PokError />} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}