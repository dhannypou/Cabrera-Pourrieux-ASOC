import React from 'react';

const Subscribe = () => {
  return (
    <section className='bg-accent pt-[54px] pb-[74px] min-h-[300px]'>
      <div className='container mx-auto px-8 text-center'>
        <h3 className='font-primary font-extrabold leading-[1.2] text-white text-[40px] mb-[12px]'>
        Suscríbase a nuestro boletín de noticias
        </h3>
        {/* <p className='mb-[40px] text-white text-sm'>
        Sea el primero en recibir las últimas noticias sobre cambios juridicos.
        </p> */}
        <form className='max-w-[600px] mx-auto flex flex-col lg:flex-row'>
          <input
            className='form-control mb-4'
            type='text'
            placeholder='Tu Correo Electronico'
          />
          <button className='btn bg-primary hover:bg-primary-hover lg:max-w-[150px] lg:ml-4'>
          Únete
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
