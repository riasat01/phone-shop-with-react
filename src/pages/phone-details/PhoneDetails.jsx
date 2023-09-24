import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PhoneDetails = () => {
    console.log("problem");
    const [phone, setPhone] = useState({});
    // const [phones, setPhones] = useState({});
   const phones = useLoaderData();
    
    const {id} = useParams();
    console.log(id);
    console.log(phones);
    useEffect(() => {
        const specificPhone = phones?.find(phone => phone.id === id);
        setPhone(specificPhone);
    },[id, phones])


    const { image, phone_name, brand_name, price, rating } = phone;
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-slate-900 bg-clip-border text-gray-500 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 flex flex-col">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-cyan-500 antialiased">
                        {brand_name}
                    </h6>
                    <h4 className="flex-grow mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone_name}
                    </h4>
                    {/* <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p> */}
                    <a className="inline-block" href="#">
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-0 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >Add to favourites
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;