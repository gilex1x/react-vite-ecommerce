/* eslint-disable react/prop-types */
import { useContext } from "react";
import { PlusIcon } from '@heroicons/react/24/solid'
import { shoppingCardContext } from "../context";
const Card = ({ price, title, category, image, description, rating }) => {
    const context = useContext(shoppingCardContext);
    const handleShowProduct = () => {
        context.handleOpenDetail();
        context.setProductToShow({ price, title, category, image, description, rating })
    };

    const handleAddProductToCart = (event) => {
        context.setCount(context.count + 1);
        context.setCartData([...context.cartData, { price, title, category, image, description, rating }]);
        console.log('Cart:', context.cartData);
        event.stopPropagation();
    }
    return (
        <div
            className='bg-white cursor-pointer w-56 h-80'
            onClick={handleShowProduct}>
            <figure className='relative mb-4 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-gray-300 text-black rounded-lg m-2 p-0.5'>{category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={`${title}-image`} />
                <button
                    type="button"
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-1'
                    onClick={handleAddProductToCart}>
                    <PlusIcon className='h-4 w-4 text-blue-500' />
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