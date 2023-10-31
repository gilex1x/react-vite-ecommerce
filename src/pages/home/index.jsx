import { useState, useEffect } from "react";
import { getProducts } from "../../api";
import Card from "../../components/card";
import ProductDetail from "../../components/productDetail";
import CheckoutMenu from "../../components/checkoutMenu";
const Home = () => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            let data = await getProducts();
            console.log(data)
            setItems(data);
            setLoading(false);
        };
        getData();
    }, []);
    return (
        <>
            {loading ? "...Loading" :
                <section className='grid gap-12 grid-cols-4 w-full max-w-screen-lg'>
                    <ProductDetail />
                    <CheckoutMenu/>
                    {
                        items?.map(product => <Card key={product.id} {...product} />)
                    }
                </section>}
        </>
    );
};

export default Home;