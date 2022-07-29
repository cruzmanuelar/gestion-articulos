import React from 'react';
import { BiTime } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';


const ArticleItem = ({ article, onDeleteArticle, onToggleArticle }) => {
  return (
    <div className='px-5 my-2'>

       <div className='flex flex-row justify-around items-center'>
            <div className='basis-1/4 flex justify-center'>

                <span className='' onClick={() => onToggleArticle(article.id)}>
                 {article.existe ? <BsFillCheckCircleFill className='hover:scale-125' color='green'/> : <BiTime className='hover:scale-125' size={20}/>}
                 
                 </span>
            </div>
            <div className='basis-1/2 flex justify-center'>
                <span
                    className=''
                    >{article.nombre}</span>
            </div>
            <div className='basis-1/2 flex justify-center'>
                <span>{article.precio}</span>
            </div>
            <div className='basis-1/4 text-center'>
                <button className='bg-[#dc2626] px-3 py-2 text-white rounded-md hover:scale-110' onClick={() => onDeleteArticle(article.id)}>
                    <AiOutlineDelete/>
                </button>
            </div>
        
       </div>
       
    
    </div>
  )
}

export default ArticleItem