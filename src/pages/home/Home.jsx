import { useLoaderData } from "react-router-dom";
import Banner from "../../components/header/banner/Banner";
import Phones from "../../components/phones/Phones";

const Home = () => {
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </>
    );
};

export default Home;