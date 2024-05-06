import nodemailer from "nodemailer";

export default class Correo {
  constructor(destinatario, asunto, cuerpo) {
    this._destinatario = destinatario;
    this._asunto = asunto;
    this._cuerpo = cuerpo;

    this._transporte = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "daliarivas11@gmail.com",
        pass: "mnnb nnva jcif kwke",
      },
    });
  }

  async EnviarCorreo() {
    const mailOptions = {
      from: "daliarivas11@gmail.com",
      to: this._destinatario,
      subject: this._asunto,
      text: this._cuerpo,
    };

    const info = await this._transporte.sendMail(mailOptions);
  }
}
