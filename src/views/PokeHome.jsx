import Image from 'react-bootstrap/Image';


const PokeHome = () => {
    return (
      <div className="text-center mt-5">
        <h1 className='TituloHome'>Welcome Pokemon Master</h1>
          <Image className='imgHome' src="/src/assets/img/Oddish.png" alt='odish' />   
      </div>
    )
  }
  
  export default PokeHome