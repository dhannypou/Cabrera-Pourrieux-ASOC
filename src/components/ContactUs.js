import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

// import social
/* import { social } from '../data'; */

export const ContactUs = () => {
	const mostrarAlerta = () => {
		swal("Mensaje Enviado");
	};
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_lfa7ycc",
				"template_6tb2uw4",
				form.current,
				"lW3hjnkRAcAsXQ-Jj"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<section
			id="contact"
			className="bg-primary text-white min-h-[732px] section"
		>
			<div className="container mx-auto text-center">
				<h2 className="text-5xl font-primary font-extrabold mb-4">
					Contáctenos
				</h2>
				<p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
					Póngase en contacto con nosotros para programar una consulta. Nuestro
					equipo está listo para ayudarlo con sus necesidades legales.
				</p>

				<form
					ref={form}
					onSubmit={sendEmail}
					className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]"
				>
					<label>Name</label>
					<input
						type="text"
						name="user_name"
						className="form-control"
						placeholder="Nombre Completo"
					/>
					<input
						type="email"
						name="user_email"
						className="form-control"
						placeholder="Correo"
					/>
					<textarea name="message" className="textarea" placeholder="Mensaje" />
					<input
						onClick={() => mostrarAlerta()}
						type="submit"
						value="Send"
						className="btn bg-accent hover:bg-accent-hover transition-all"
					/>
				</form>

				{/* form */}
				{/*  <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]'>
          <input className='form-control' type='text' placeholder='Nombre Completo' />
          <input
            className='form-control'
            type='text'
            placeholder='Correo'
          />
          <textarea className='textarea' placeholder='Mensaje'></textarea>
          <button className='btn bg-accent hover:bg-accent-hover transition-all'>
            Enviar Mensaje
          </button>
        </form> */}

				{/* social */}
				<div className="flex items-center justify-between mx-auto max-w-[205px]">
					<a
						href="https://www.instagram.com/estudiojuridicocyp.tuc/"
						target="_blank"
					>
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
					<a href="#" target="_blank">
						<ion-icon name="mail-outline"></ion-icon>
					</a>
					<a href="#" target="_blank">
						<ion-icon name="logo-youtube"></ion-icon>
					</a>
					{/* {social.map((item, index) => {
            return (
              <a href='#' key={index}>
                <img src={item.icon}></img>
              </a>
            );
          })} */}
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
