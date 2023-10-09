import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyJewelry = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [jewelries, setJewelries] = useState([]);
  
    const url = `http://localhost:3000/bookings?email=${user?.email}`;
    // const url = 'http://localhost:3000/bookings?email=dina@gmail.com';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJewelries(data);
            })
    }, [url]);

  const handleDelete = (_id) => {
    const warning = Swal.fire({
      title: "Are you sure want to delete!",
    });
    if (warning) {
      fetch(`http://localhost:3000/jewelry/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Delete!",
              text: "successfully deleted",
              icon: "warning",
              confirmButtonText: "Yes",
            });
            // const remaining = myToys.filter((toy) => toy._id !== _id);
            // setMyToys(remaining);
          }
        });
    }
console.log(_id)
    }

  return (
    <div className="overflow-x-auto my-8 ">
      <table className="table w-full text-center">
        <thead>
          <tr>
            <th>Img</th>
            <th>Seller</th>
            <th>Email</th>
            <th>JewelryName</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available Qty.</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jewelries &&
            jewelries.map((jewelry) => (
              <tr key={jewelry._id}>
                <td>
                  <img
                    src={jewelry.photoUrl}
                    className="w-20 h-20"
                    alt={`${jewelry.jewelryName}`}
                  />
                </td>
                <td>{jewelry?.sellerName}</td>
                <td>{jewelry?.email}</td>
                <td>{jewelry?.jewelryName}</td>
                <td>{jewelry?.subCategory}</td>
                <td>${jewelry?.price}</td>
                <td>{jewelry?.rating}</td>
                <td>{jewelry?.quantity}</td>
                <td colSpan={2} className="text-center">
                  <button onClick={() => handleDelete(`${jewelry._id}`)}
                  
                    className="btn btn-secondary btn-xs"> 
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyJewelry;