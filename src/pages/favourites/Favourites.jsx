import { useEffect, useState } from "react";
import Phones from "../../components/phones/Phones";

const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const _ = JSON.parse(localStorage.getItem(`favourites`));
        // console.log(_)
        if(_){
            setFavourites(_);
        }else{
            setNotFound(true);
        }
        }, []);

    return (
        <div>
            <h1>favourites</h1>
            <div className="">
                {
                    notFound ? <p>No data found</p> : <Phones title={`Favourites`} phones={favourites}></Phones>
                }
            </div>
        </div>
    );
};

export default Favourites;