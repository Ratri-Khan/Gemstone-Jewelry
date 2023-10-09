import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllJewelry = () => {
    const jewelries = useLoaderData();
    // console.log(allJewelry);
    const handleDelete = _id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:3000/jewelry/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                    //     const remaining = bookings.filter(booking => booking._id !== id);
                    //     setBookings(remaining);
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Seller</th>
                        <th>JewelryName</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available Qty.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {jewelries.map(jewelry =>
                    <tbody key={jewelry._id}>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask w-20 h-20">
                                            <img src={jewelry.photoUrl} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><p>{jewelry.sellerName}</p></td>
                            <td><p>{jewelry.jewelryName}</p></td>
                            <td><p>{jewelry.subCategory}</p></td>
                            <td><p>{jewelry.price}</p></td>
                            <td><p>{jewelry.rating}</p></td>
                            <td><p>{jewelry.quantity}</p></td>
                            <th>
                                <button className="btn btn-ghost btn-xs bg-teal-900 text-white">UPDATE</button><br />
                                <button className="btn btn-ghost btn-xs bg-teal-900 text-white mt-4"
                                onClick={() => handleDelete(jewelry._id)}>DELETE</button>
                            </th>
                        </tr>
                    </tbody>

                )
                }
            </table>


        </div>
    );
};

export default AllJewelry;