const nodemailer = require('nodemailer');

 const sendMail= async(email,user,str)=>{
                         try{
const transporter = nodemailer.createTransport({
          service : 'hotmail',
        
        
          auth:{
          user :'nodejs2022@outlook.com',
          pass:'12345689@nodejs'},
})


await transporter.sendMail({
                         from: 'nodejs2022@outlook.com',
                         to: email,
                         subject: "Reset Password Request",
                         html: `<div
                         style="
                            display: grid;
                           justify-items: center;
                           width: 80%;
                           margin: auto;
                           padding: 10px;
                           background-color: rgb(179, 229, 245);
                         "
                       >
                         <h1 style="color: blue">Hi ${user.username}, </h1>
                         <p style="font-style: italic; font-size: 25px; text-align: center; margin: 5px; font-weight: bold;">
                           Please enter the below OTP into your email verification page👇👇
                         </p>
                         <h1
                           style="
                              border-top: 1px solid darkblue;
                             border-right: 1px solid darkblue;
                             border-left: 1px solid darkblue;
                             border-bottom: 5px solid darkblue;
                             background-color: rgb(10, 133, 221);
                             width: 100px;
                             text-align: center;
                             padding: 5px;
                             border-radius: 5px;
                             text-shadow: 1px 2px 5px rgb(224, 222, 235);
                           "
                         >
                           ${str}
                         </h1>
                       </div>`,
                       });
                       console.log("Email has been sent");




}catch(err){

console.log(err)
                         }


}
module.exports = sendMail

