import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Appointment = () => {
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
		<div className="bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
			<h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
				Solicitar Consulta
			</h3>
			{/* bar */}
			<div className="w-[54px] h-[3px] bg-white my-6 mx-auto"></div>
			{/* input group */}

			<form ref={form} onSubmit={sendEmail} className="space-y-[24px]">
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
				<textarea
					name="message"
					className="resize-none w-full h-[100px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary"
					placeholder="Tu Mensaje"
				/>
				<input
					onClick={() => mostrarAlerta()}
					type="submit"
					value="Send"
					className="btn bg-primary hover:bg-primary-hover transition-all"
				/>
			</form>
			{/*  <input className='form-control' placeholder='Nombre Completo' type='text' />
        <input
          className='form-control'
          placeholder='Numero de Telefono'
          type='text'
        />
        <input
          className='form-control'
          placeholder='Correo'
          type='email'
        />
        <textarea
          className='resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary'
          placeholder='Tu Mensaje'
        ></textarea>
      
        <button className='btn bg-primary hover:bg-primary-hover transition-all'>
        Enviar mensaje
        </button> */}
		</div>
	);
};

export default Appointment;
