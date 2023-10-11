import Image from 'react-bootstrap/Image';


const Home = () => {
    return (
      <div className="text-center mt-5">
        <h1>Bienvenido maestro Pokémon</h1>
          <Image className='imgHome' src="/src/assets/img/Oddish.png" alt='odish' />   
      </div>
    )
  }
  
  export default Home