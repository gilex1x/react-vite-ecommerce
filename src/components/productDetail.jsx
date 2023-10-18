import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { shoppingCardContext } from '../context';
const ProductDetail = () => {
    const context = useContext(shoppingCardContext);
    const { rating, price, title, description, image } = context.productToShow;
    let stars = '⭐'.repeat(Math.floor(rating.rate));
    console.log(rating)
    return (
        <aside className={`${context.isDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 top-[60px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-60px)]`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Details</h2>
                <button onClick={() => context.handleCloseDetail()}>
                    <XMarkIcon className='h-6 w-6 text-blue-500' />
                </button>
            </div>
            <figure>
                <img className='w-full h-full rounded-lg' src={image} alt={title} />
            </figure>
            <section className='flex flex-col p-6 text-left'>
                <h3 className='text-2xl'>{title}</h3>
                <span className='font-medium text-md'>${price} COP</span>
                <span>{stars}</span>
                <p>{description}</p>
            </section>
        </aside>
    );
};

export default ProductDetail