import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeName, setPokeName] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    fetchPokemons();
  }, [pokeName]);

  const url = 'https://pokeapi.co/api/v2/pokemon';

  const fetchPokemons = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        const nombresPokemon = data.results.map(pokemon => pokemon.name);
        setPokemons(nombresPokemon);
      }
    } catch (error) {
      console.error("Hubo un Pokerror al obtener los Pokémons:", error);
    }
  };

  const handlePokemonChange = (e) => {
    setPokeName(e.target.value);
  };

  // console.log(pokeName);
  const findPokemon = () => {
    if (pokeName) {
      navigate(`/PokeDetalles/${pokeName}`);
    } else {
      navigate('/PokError');
    }
  }


  return (
    <div>
      <div className='text-center'>
        <h1>Choose your Pokémon...</h1>
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <select className='form-select text-white pokeSelect' value={pokeName} onChange={handlePokemonChange}>
          {pokemons.map((nombrePokemon, index) => (
            <option key={index} value={nombrePokemon}>
              {nombrePokemon}
            </option>
          ))}
        </select>        
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <button className='btn btn-danger btnFind' onClick={findPokemon}>Find Pokémon</button>
      </div>
    </div>

  );
}

export default Pokemons;
