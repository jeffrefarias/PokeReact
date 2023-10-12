import { useState, useEffect } from 'react';

function Pokemons({ pokeName, setPokeName }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

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

  const handleAreaChange = (e) => {
    setPokemons(e.target.value);
  };

  return (
    <div>
      <div className='text-center'>
        <h1>Choose your Pokémon...</h1>
      </div>

      <div className='d-flex justify-content-center mt-4'>
        <select className='form-select text-white pokeSelect' value={pokeName} onChange={handleAreaChange}>
          {pokemons.map((nombrePokemon, index) => (
            <option key={index} value={nombrePokemon}>
              {nombrePokemon}
            </option>
          ))}
        </select>
      </div>
    </div>

  );
}

export default Pokemons;
