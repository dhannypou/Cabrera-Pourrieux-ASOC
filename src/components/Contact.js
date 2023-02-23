import React from 'react';

// import social
import { social } from '../data';

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-primary text-white min-h-[732px] section'
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
        Contáctenos
        </h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
        Póngase en contacto con nosotros para programar una consulta. Nuestro equipo está listo para ayudarlo con sus necesidades legales.
        </p>

        {/* form */}
        <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]'>
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
        </form>

        {/* social */}
        <div className='flex items-center justify-between mx-auto max-w-[205px]'>
          {social.map((item, index) => {
            return (
              <a href='#' key={index}>
                <img src={item.icon}></img>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
