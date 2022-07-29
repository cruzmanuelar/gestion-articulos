import React from 'react';
import ArticleItem from './ArticleItem';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';

const Main = ({articles, onDeleteArticle, onToggleArticle, totalPrecio}) => {

  return (
    <div className="flex flex-col md:w-2/3 m-10 rounded-md bg-white">
      <h1 className='my-4 text-xl text-center font-semibold'>Inventario de articulos</h1>
      <hr/>
      <div className='flex flex-row justify-around px-5 my-2'>
            <div className='basis-1/4 font-semibold flex justify-center'>
                <span>Estado:</span>
            </div>
            <div className='basis-1/2 font-semibold flex justify-center'>
                <span>Nombre:</span>
            </div>
            <div className='basis-1/2 font-semibold flex justify-center'>
                <span>Precio S/:</span>
            </div>
            <div className='basis-1/4 text-center font-semibold'>
                <span className=''>Eliminar</span>
            </div>
        
       </div>
       <hr/>
      {
            articles.map( art =>
                (
                <>
                <ArticleItem key={art.id} article={art} onDeleteArticle={onDeleteArticle} onToggleArticle={onToggleArticle}/>
                <hr/>
                </>
                
            ))
        }
        {totalPrecio > 0 &&
          <div className='flex flex-row px-10 my-2 font-semibold'>Costo estimado: {totalPrecio} S/</div>
        }
        {articles.length > 0 &&
          <div className='flex flex-row px-10 my-2 items-center'><small>*Cambia el estado pulsando sobre el icono del articulo</small></div>
        }
    </div>
  )
}

export default Main