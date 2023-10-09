// import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';



const Details = () => {
    const Information = useLoaderData();
    console.log(Information)
    const {
        jewelryName,
        sellerName,
        email,
        photoUrl,
        price,
        rating,
        quantity,
        description,
        subCategory,
    } = Information;
    console.log(Information)
    return (
        <div className='flex  my-9 w-6/12 mx-auto'>
                <div className='p-8 border-2 bg-teal-900 text-white'>
                    <p>
                        <span className="font-semibold text-lg">JewelryName:</span> {jewelryName}
                    </p>
                    <p>
                        <span className="font-semibold text-lg">SellerName:</span>{" "}
                        {sellerName}
                    </p>
                    <p>
                        <span className="font-semibold text-lg">SellerEmail:</span>{" "}
                        {email}
                    </p>
                    <p>
                        <span className="font-semibold text-lg">Price:</span> ${price}
                    </p>
                    <p>
                        <span className="font-semibold text-lg">Ratings:</span> {rating}
                    </p>
                    <p>
                        <span className="font-semibold text-lg">Avail.Qnty:</span>{" "}
                        {quantity} pics
                    </p>
                    <p>
                        <span className="font-semibold text-lg">Desc:</span> {description}
                    </p>
                    <p>SubCategory : {subCategory}</p>
                </div>
            <div className=" flex justify-center items-center bg-slate-200">

                <img
                    src={photoUrl}
                    alt={`img of ${toyName}`}
                    className="w-96 h-96 object-cover"
                />
            </div>
        </div>
    );
};

export default Details;