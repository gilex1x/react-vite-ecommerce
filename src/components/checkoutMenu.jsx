import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { shoppingCardContext } from '../context';
const CheckoutMenu = () => {
    const context = useContext(shoppingCardContext);
    return (
        <aside className={`${context.isCheckoutOpen ? 'flex' : 'hidden'} flex-col fixed right-0 top-[60px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-60px)]`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={() => context.handleCloseCheckout()}>
                    <XMarkIcon className='h-6 w-6 text-blue-500' />
                </button>
            </div>
        </aside>
    );
};

export default CheckoutMenu