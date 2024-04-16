import transporter from "@/config/config_nodemailer";

import { NextResponse } from "next/server";

export async function POST(request){
    const {email, name, lastName, phone, query} = await request.json()
    // console.log(email, name, lastName, phone, query)
    const myEmail = {
        from: "Tienes una consulta de la web <maxiirucci@gmail.com>",
        to: 'maxiirucci@gmail.com',
        subject: 'Hay una consulta desde la web',
        html: `<div classname={p-5}>Datos:<br><strong>Mail:</strong>${email}<br> <strong>Nombre y apellido:</strong> ${name} ${lastName}<br><strong>Telefono:</strong> ${phone}<br> <strong>Consulta:</strong> ${query}</div>`,

    }
    await transporter.sendMail(myEmail)

    return NextResponse.json({'message' : 'datos enviados'})
}

