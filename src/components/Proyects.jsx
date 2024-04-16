

function Proyects() {
  return (
    <div className="p-5">
        <h1 className="m-20 text-white text-4xl">Proyectos</h1>
        <div className="grid text-white sm:grid-cols-1 md:grid-cols-3 space-x-5">
          <div className="bg-black rounded-xl p-2 my-10 transition-all transform hover:scale-105 md:my-0">
            <img className="rounded-md" src="/nordica.png"></img>
            <h1 className="my-5">Ecommerce para emprendimiento</h1>
            <p className="p-5">El sitio web ecommerce, fue desarrollado con la finalidad de que el emprendimiento tenga un mayor numero de ventas en linea y fue desarrollado con react y nodejs garantizando una solucion escalable y atractiva para los usuarios</p>
            <a href="https://www.nordicasocks.shop/"><button className="bg-blue-500 hover:bg-blue-700 p-2 m-5 rounded-md w-40">Ver</button></a>
          </div>
          <div className="bg-black rounded-xl p-2 my-10 transition-all transform hover:scale-105 md:my-0">
            <img className="rounded-md" src="/estudioContable.png"></img>
            <h1 className="my-5">Sitio web estudio contable</h1>
            <p className="p-5">Desarrolle un sitio web para un estudio jurídico con el objetivo de ampliar su alcance y brindar una presencia en línea para captar nuevos clientes.</p>
            <a href="https://estudiocontablecontable.vercel.app/"><button className="bg-blue-500 p-2 m-5 rounded-md w-40">Ver</button></a>
          </div>
          <div className="bg-black rounded-xl p-2 m-10 transition-all transform hover:scale-105 md:my-0">
            <img className="rounded-md" src="/sec.png"></img>
            <h1 className="my-5">Proyecto en Wordpress</h1>
            <p className="p-5">Actualice y mejore el sitio web utilizando WordPress. Implementando nuevas funcionalidades y características, mejorando su accesibilidad. Además, trabajé en la actualización del diseño y la estructura del contenido para reflejar de manera más efectiva la identidad de la institución y cumplir con los objetivos establecidos.</p>
            <a href="https://www.sectw.com.ar/"><button className="bg-blue-500 p-2 m-5 rounded-md w-40">Ver</button></a>
          </div>
        </div>
    </div>
  )
}

export default Proyects