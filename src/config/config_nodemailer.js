import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PW_EMAIL
    }
})

transporter.verify().then(() => {
    console.log("nodemailer en funcionamiento!")
}).catch((err) => console.log(err))

export default transporter;