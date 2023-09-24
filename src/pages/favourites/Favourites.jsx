import { useEffect, useState } from "react";
import Phones from "../../components/phones/Phones";
import ShowFavourites from "../../components/show-favourites/ShowFavourites";

const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const _ = JSON.parse(localStorage.getItem(`favourites`));
        // console.log(_)
        if (_) {
            setFavourites(_);
        } else {
            setNotFound(true);
        }
    }, []);

    const handleDelete = () => {
        localStorage.clear();
        setFavourites([]);
        setNotFound(true);
    }

    return (
        <>
            {/* <h1>favourites</h1> */}
            <div className="w-fit m-auto">
            {
                notFound || <button onClick={handleDelete} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white px-3 py-2">Delete all favourites</button>
            }
            </div>
            <div className="">
                {
                    notFound ? <p className="w-fit m-auto">No data found</p> : <ShowFavourites favourites={favourites}></ShowFavourites>
                }
            </div>
        </>
    );
};

export default Favourites;