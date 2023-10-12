
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className='text-center mt-5'>
            <div className='d-flex justify-content-center DivError'>
                <h1>4</h1><img className='pokeImg' src="/src/assets/img/pokeball.png" alt="" /><h1>4</h1>
            </div>
            <div>
                <p className=''>Pokémon not Found</p>
            </div>
            <div>
                <button onClick={() => navigate('/Pokemons')} className='mt-5 bg-danger btnError'>Volver</button>
            </div>
        </div>
    )
}
