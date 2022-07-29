import React from 'react'
import useForm from '../hooks/useForm'

const Form = ({onNewArticle}) => {

  const { nombre, precio, onChangeInput, onResetForm } = useForm({
    nombre: '',
    precio:0
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if(nombre.length <= 1 || precio < 0) return;

    const newArticle = {

        id: new Date().getTime(),
        existe: false,
        nombre,
        precio: Number(precio)
    }

    onNewArticle(newArticle);
    onResetForm();
  }


  return (
    <div className="md:w-1/3 flex flex-col m-10 bg-white rounded-md">


        <h4 className='my-4 text-xl text-center font-semibold underline'>Agregar articulo</h4>
        <form onSubmit={onFormSubmit} className='flex flex-col justify-center p-3'>
          <label className='my-2 font-semibold'>Nombre:</label>
          <input
            className='p-2 rounded-md border border-gray-800'
            name='nombre'
            value={nombre}
            onChange={onChangeInput}
            required
            autoComplete='off'
            />
          <label className='my-2 font-semibold'>Precio:</label>
          <input
            className='p-2 rounded-md border border-gray-800'
            name='precio'
            value={precio}
            onChange={onChangeInput}
            required
            type='number'
            autoComplete='off'
          />
          <button className='bg-[#22c55e] rounded-md py-2 my-2 font-semibold' type='submit'>Agregar</button>
        </form>


    </div>
  )
}

export default Form