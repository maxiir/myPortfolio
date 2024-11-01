"use client";
import { useState } from "react";
import { toast } from "sonner";
function Contact() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [query, setQuery] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    // console.log('datos del formulario:', email, name, lastName, phone, query)
    const res = await fetch('/api/sendEmail', {
      method: "POST",
      body: JSON.stringify({email, name, lastName, phone, query}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    console.log('datos enviados:', res)
  }
  

  return (
    <div>
      <h1 className="text-white text-4xl m-20 text-center">Contacto</h1>
      <div className="border-gray-800 h-screen pt-10">
        <div className="w-full max-w-md mx-auto bg-slate-800 flex justify-center items-center rounded-lg">
          <form onSubmit={onSubmit} className="p-5 rounded">
            <div className="mt-3">

              <label className="text-white">Email</label>
              <input type="email" className="my-1 w-full p-1 rounded" placeholder='Ingrese su email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mt-3">

              <label className="text-white">Nombre</label>
              <input type="text" className="my-1 w-full p-1 rounded" placeholder='Ingrese su nombre' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mt-3">

              <label className="text-white">Apellido</label>
              <input type="text" className="my-1 w-full p-1 rounded" placeholder='Ingrese su apellido' onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="mt-3">

              <label className="text-white">Telefono</label>
              <input type="number" className="my-1 w-full p-1 rounded" placeholder='Ingrese su celular' onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mt-3">

              <label className="text-white">Consulta</label>
              <textarea className="my-1 w-full p-1 rounded" placeholder='Ingrese su consulta' id="" cols="30" rows="5" onChange={(e) => setQuery(e.target.value)}></textarea>
            </div>
            <button type="submit" className="w-full p-2 my-5 rounded text-white bg-blue-600 hover:bg-blue-900" onClick={() => toast.success('Consulta enviada')}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
