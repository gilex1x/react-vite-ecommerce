const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-4 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-gray-300 text-black rounded-lg m-2 p-0.5'>Categorie</span>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='product name' />
                <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-1'>
                    +
                </button>
            </figure>
            <p className=' flex justify-between'>
                <span>Product name</span>
                <span className='text-lg font-bold'>Product price</span>
            </p>
        </div>
    )
};


export default Card;