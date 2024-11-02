'use client'

function Proyects() {
  return (
    <div className="p-5">
        <h1 className="m-20 text-white text-4xl">Proyectos</h1>
        <div className="grid text-white sm:grid-cols-1 md:grid-cols-3 space-x-5">
          <div className="bg-black rounded-xl p-2 my-10 transition-all transform hover:scale-105 md:my-0">
            <img className="rounded-md" src="/nordica.png"></img>
            <h1 className="my-5">Ecommerce para emprendimiento</h1>
            <p className="p-5">El sitio web ecommerce, fue desarrollado con la finalidad de que el emprendimiento tenga un mayor numero de ventas en linea y fue desarrollado con react y nodejs garantizando una solucion escalable y atractiva para los usuarios</p>
            <a href="https://www.nordicasocks.shop/"><button className="bg-blue-500 mt-20 hover:bg-blue-700 p-2  rounded-md w-40">Ver</button></a>
          </div>
          <div className="bg-black rounded-xl p-2 my-10 transition-all transform hover:scale-105 md:my-0">
            <img className="rounded-md" src="/visionWeb.png"></img>
            <h1 className="my-5">Landing Page de servicio profesional</h1>
            <p className="p-5">Diseñé una landing page para ofrecer mis servicios como desarrollador web, con un diseño moderno y responsivo. Incluye secciones de "Caracteristicas", "Planes", "Preguntas Frecuentes", además de un acceso rápido a WhatsApp. Esta landing page destaca mis habilidades y facilita la conexión con clientes potenciales, optimizando la conversión de visitas en oportunidades reales.</p>
            <a href="https://vision-web-sigma.vercel.app/"><button className="bg-blue-500 p-2 m-5 rounded-md w-40">Ver</button></a>
          </div>
          <div className="bg-black rounded-xl p-2 m-10 transition-all transform hover:scale-105 md:my-0">
            <img className="rounded-md" src="/myTasks.png"></img>
            <h1 className="my-5">Proyecto de Gestión de Tareas en Next.js</h1>
            <p className="p-5">
              Este proyecto en Next.js implementa un sistema CRUD para gestión de tareas con registro y autenticación de usuarios, permitiendo crear, gestionar y actualizar tareas propias. Cuenta con una interfaz responsiva, API REST, autenticación con sesiones y tokens, y validación de datos en frontend y backend.
            </p>
            <a href="https://my-tasks-three-iota.vercel.app/"><button className="bg-blue-500 mt-12 p-2 rounded-md w-40">Ver</button></a>
          </div>
        </div>
    </div>
  )
}

export default Proyects