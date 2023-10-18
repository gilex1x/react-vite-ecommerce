/* eslint-disable react/prop-types */
const Layout =({children})=>{
    return (
        <section className=' flex flex-col mt-8 items-center text-center w-full'>
            {children}
        </section>
    )
};


export default Layout