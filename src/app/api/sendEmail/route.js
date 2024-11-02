import transporter from "@/config/config_nodemailer";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { Email, Name, LastName, Number, Query } = await request.json();
    if(!Email || !Name || !LastName || !Number || !Query){
      return NextResponse.json({message:"Datos incompletos"}, {status:400})
    }
    const sendEmail = {
      from: "Tienes una consulta desde tu portafolio <maxiirucci@gmail.com>",
      to: "maxiirucci@gmail.com",
      subject: "Hay una consulta desde el portafolio",
      html: `
        <div class= "p-5">
          Datos:<br>
          <strong>Mail:</strong>${Email}<br>
          <strong>Nombre y apellido:</strong> ${Name} ${LastName}<br>
          <strong>Telefono:</strong> ${Number}<br>
          <strong>Consulta:</strong> ${Query}
        </div>
        `,
    };

    await transporter.sendMail(sendEmail);
    return NextResponse.json({message: "Consulta enviada con exito!"}, {status:200})
    
  } catch (error) {
    console.error("Error al enviar el email", error)
    return NextResponse.json({message:"Error en el servidor"}, {status:500})
  }
}
