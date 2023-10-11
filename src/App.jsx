import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeNavbar from './components/PokeNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PokeNavbar />
      </BrowserRouter>
    </div>
  );
}