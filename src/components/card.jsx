/* eslint-disable react/prop-types */
import { useContext } from "react";
import { shoppingCardContext } from "../context";
const Card = ({ price, title, category, image }) => {
    const context = useContext(shoppingCardContext);
    return (
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-4 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-gray-300 text-black rounded-lg m-2 p-0.5'>{category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={`${title}-image`} />
                <button 
                    type="button" 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-1'
                    onClick={()=>{console.log(`Count: ${context.count}`); context.setCount(context.count + 1)}}>
                    +
                </button>
            </figure>
            <p className=' flex justify-between'>
                <span>{title || 'Titulo generico'}</span>
                <span className='text-lg font-bold'>${price}</span>
            </p>
        </div>
    )
};


export default Card;