import { XMarkIcon} from '@heroicons/react/24/solid'
const ProductDetail = () => {
    return (
        <aside className="flex flex-col fixed right-0 top-[60px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-60px)]">
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Details</h2>
                <button>
                    <XMarkIcon className='h-6 w-6 text-blue-500' />
                </button>
            </div>
        </aside>
    );
};

export default ProductDetail