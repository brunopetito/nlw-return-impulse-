import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b1c216b1c9f1c7",
    pass: "528a855bb3b2d2"
  }
});



export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject,body}: SendMailData){
    await transport.sendMail({
      from:'Equipe Feedget <oi@feedget.com>',
      to: 'Bruno Petito <brunopetito97@gmail.com>',
      subject,
      html:body,
      
    
    })
  }
}