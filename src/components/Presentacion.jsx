

function Presentacion() {
  return (
    
    <div className='p-20 bg-black rounded-md h-full'>
      <div className="block justify-between items-center lg:flex">
        <img src='/perfilCV.jpg' className='w-80 m-5 rounded-full border-4 border-green-300'/>
        <div>
          <h1 className="text-white text-left text-5xl m-5">Hola soy Maxi!</h1>
          <p className='text-white text-xs text-left m-5 md:text-sm'>Soy un programador web con experiencia en el desarrollo de aplicaciones utilizando el stack MERN (MongoDB, Express.js, React.js y Node.js). También tengo conocimientos en Git y en otras tecnologías relacionadas con el desarrollo web. Estoy comprometido con aprender y crecer en mi carrera, y siempre estoy buscando nuevos desafíos y oportunidades para mejorar mis habilidades. Estoy emocionado de poder aplicar mis conocimientos y experiencia para contribuir al éxito de un equipo y a la creación de soluciones innovadoras para los clientes.</p>
        </div>
      </div>
    </div>
    
  )
}

export default Presentacion