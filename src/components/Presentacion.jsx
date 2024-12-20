'use client'

function Presentacion() {
  return (
    
    <div className='p-20 bg-black rounded-md h-full'>
      <div className="block justify-between items-center lg:flex">
        <img src='/perfilCV.jpg' className='w-[150px] mx-auto lg:w-80 m-5 rounded-full border-4 border-green-300 lg:mx-0'/>
        <div>
          <h1 className="text-white text-2xl lg:text-left lg:text-5xl m-5">Hola me llamo Maximiliano Rucci</h1>
          <p className="text-orange-500 text-center lg:text-2xl lg:text-left m-5">DESARROLLADOR WEB FULL STACK</p>
          <p className='text-white text-center lg:text-xs lg:text-left m-5 md:text-lg'>Soy programador con experiencia tanto en desarrollo frontend como backend. Mi enfoque es contribuir al éxito de los equipos en los que trabajo, creando soluciones innovadoras y efectivas para los clientes. Me entusiasma aplicar mis conocimientos y seguir creciendo en el mundo del desarrollo web.</p>
        </div>
      </div>
    </div>
    
  )
}

export default Presentacion