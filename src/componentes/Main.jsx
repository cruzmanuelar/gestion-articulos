import React from 'react';
import ArticleItem from './ArticleItem';


const Main = ({articles, onDeleteArticle, onToggleArticle, totalPrecio}) => {

  return (
    <div className="flex flex-col md:w-2/3 m-10 rounded-md bg-white">
      <h1 className='my-4 text-xl text-center font-semibold'>Inventario de articulos</h1>
      <hr/>
      <div className='flex flex-row justify-around px-5 my-2'>
            <div className='basis-1/4 font-semibold'>
                <span>Compra:</span>
            </div>
            <div className='basis-1/2 font-semibold'>
                <span>Nombre:</span>
            </div>
            <div className='basis-1/2 font-semibold'>
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
    </div>
  )
}

export default Main