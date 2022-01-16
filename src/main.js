const express = require('express');
const nodemailer = require('nodemailer');

const PORT = 3000;
const app = express();

app.post('/mail',(req, res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        post: 465,
        secure: true,
        auth:{

        },
      });
    
      // send mail with defined transport object
      //let info = await transporter.sendMail({
      return transporter.sendMail({
          
        from: '"Envío de Credenciales" <javierquisbert37@gmail.com>',
        to: "javierquisbert37@gmail.com",
        subject: "Envio de Credenciales Plataforma de Postgrado - U.P.R.I.",
        html:`
        <center><b>La Unidad de Postgrado y Relaciones Internacionales de la Facultad de Derecho y Ciencias Políticas de U.M.S.A.</b></br>
        </br>Te da la bienvenida a la casa superior de estudios.</br>
        <b>Por favor de un click en el siguiente link para acceder:</b></br>
        <center><a href="https://bit.ly/ACCEDER-A-PLATAFORMA-UPRI">PLATAFORMA MOODLE</a></center>
        <p>Con las siguientes credenciales:</b><br>

        <b>usuario:</b>USUARIO
        </br>
        <b>contraseña:CONTRASEÑA
        </br>
        <br>

        Saludos coordiales.
        </p></center>
        `,
      },(err,info)=>{
          if(err) res.status(200).send({ success:false, error: err});

          return res.status(200).send({
              success: true,
              message: 'email sending'
          });
      });

      function say(word){
          console.log(word);
      }
});
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

