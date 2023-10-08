import { useState, useEffect } from "react";
import { getProducts } from "../../api";
import Card from "../../components/card";
const Home = () => {
    const [items, setItems] = useState(null);
    useEffect(() => {

        const getData = async () => {
            let data = await getProducts();
            console.log(data)
            setItems(data);
        };
        getData();
    }, []);
    return (
        <>
            <h1>Hola desde Home</h1>
            <section className='grid gap-8 grid-cols-5 w-full max-w-screen-xl'>
                {
                    items?.map(product => <Card key={product.id} {...product} />)
                }
            </section>
            <Card />
        </>
    );
};

export default Home;