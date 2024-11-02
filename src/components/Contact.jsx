"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import { formSchema } from "@/schemas/form-schema";

function Contact() {

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/sendEmail', {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const response = await res.json()

      if(!res.ok){
        return toast.error(response.message)
      }
      return toast.success(response.message)
      
    } catch (error) {
      toast.error("Error en el servidor")
    }
  }
  

  return (
    <div>
      <h1 className="text-white text-4xl m-20 text-center">Contacto</h1>
      <div className="mb-5 border-gray-800 h-screen pt-10">
        <div className="w-full max-w-md mx-auto bg-slate-800 flex justify-center items-center rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="p-5 rounded">
            <div className="mt-3">
              <label className="text-white">Email</label>
              <input type="email" className={`my-1 w-full p-1 rounded ${errors.Email && "border-2 border-orange-500"}`} placeholder='Ingrese su email' {...register('Email')} />
              {errors && <spam className="text-orange-500">{errors.Email?.message}</spam>}
            </div>
            <div className="mt-3">

              <label className="text-white">Nombre</label>
              <input type="text" className={`my-1 w-full p-1 rounded ${errors.Name && "border-2 border-orange-500"}`} placeholder='Ingrese su nombre' {...register('Name')}/>
              {errors && <spam className="text-orange-500">{errors.Name?.message}</spam>}
            </div>
            <div className="mt-3">

              <label className="text-white">Apellido</label>
              <input type="text" className={`my-1 w-full p-1 rounded ${errors.LastName && "border-2 border-orange-500"}`} placeholder='Ingrese su apellido' {...register('LastName')}/>
              {errors && <spam className="text-orange-500">{errors.LastName?.message}</spam>}
            </div>
            <div className="mt-3">

              <label className="text-white">Telefono</label>
              <input type="number" className={`my-1 w-full p-1 rounded ${errors.Number && "border-2 border-orange-500"}`} placeholder='Ingrese su celular' {...register('Number')} />
              {errors && <spam className="text-orange-500">{errors.Number?.message}</spam>}
            </div>
            <div className="mt-3">

              <label className="text-white">Consulta</label>
              <textarea className={`my-1 w-full p-1 rounded ${errors.Query && "border-2 border-orange-500"}`} placeholder='Ingrese su consulta' id="" cols="30" rows="5" {...register('Query')}></textarea>
              {errors && <spam className="text-orange-500">{errors.Query?.message}</spam>}
            </div>
            <button type="submit" className="w-full p-2 my-5 rounded text-white bg-blue-600 hover:bg-blue-900">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
