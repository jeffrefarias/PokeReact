import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const PokeDetalles = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    fetchPokemon();
  }, [name]);


  const fetchPokemon = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // const pokeId = data.id;
      // const imgFront = data.sprites.front_default;
      // const imgBack = data.sprites.back_default;
      setPokemon(data)
      // name,hp,attack,defense,special attack, special defende, speed
    } catch (error) {
      console.log("Hubo un Pokerror");
    }
  };


  return (
    <div className="text-center mt-5">
      {pokemon && ( 
        <div className='d-flex justify-content-center'>
          <div>
            <h1 className='pokeNameDetalle'>{pokemon.name}</h1>
            <Image className='pokeImgSeleccionada' src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Image className='pokeImgSeleccionada' src={pokemon.sprites.back_default} alt={pokemon.name} />
          </div>
          <div className='pokeStats'>
            <h3>Stats:</h3>
            <ul className='text-danger'>
              <li>HP: {pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat}</li>
              <li>Attack: {pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat}</li>
              <li>Defense: {pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat}</li>
              <li>Special Attack: {pokemon.stats.find((stat) => stat.stat.name === "special-attack").base_stat}</li>
              <li>Special Defense: {pokemon.stats.find((stat) => stat.stat.name === "special-defense").base_stat}</li>
              <li>Speed: {pokemon.stats.find((stat) => stat.stat.name === "speed").base_stat}</li>
            </ul>
          </div>       
        </div> 
            
      )}    
      <div>
          <button onClick={() => navigate('/Pokemons')} className='mt-5 bg-danger btnError'>Volver</button>
      </div>
     
    </div>
  )
}

export default PokeDetalles