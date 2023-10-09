import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddJewelry = () => {
  const [selectValue, setSelectValue] = useState(" ");
  const { user } = useContext(AuthContext);
  const handleAddToy = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const jewelryName = form.jewelryName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const photoUrl = form.photo.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    // const subCategory = form.subCategory.value;

    const jewelryInfo = {
      jewelryName,
      sellerName,
      email,
      photoUrl,
      price,
      rating,
      quantity,
      description,
      subCategory: selectValue,
    };
    fetch("http://localhost:3000/jewelry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(jewelryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          text: "Successfully added a toy",
        });
      });
    form.reset();
  };
  return (
    <div>
      <p className=" text-center text-2xl mt-4 font-bold ">Add A Jewelry</p>
      <div className="w-6/12 mx-auto shadow-md">
        <form onSubmit={handleAddToy} className="card-body">
          <div className="grid md:grid-cols-2">
            <div>
              <label className="label">
                <span className="label-text">SellerName</span>
              </label>
              <input type="text" name="sellerName" value={user?.displayName} className="input input-bordered border-teal-900 " placeholder="Enter Seller Name" />
            </div>
            <div className="mt-8">
              <select
                className="select input-bordered border-teal-900"
                onChange={(e) => setSelectValue(e.target.value)}>
                <option disabled selected>Select subCategory</option>
                <option value="Ear Ring">Ear Ring</option>
                <option value="Necklace">Necklace</option>
                <option value="Bracelet">Bracelet</option>
              </select>
            </div>


            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={user?.email} name="email" className="border-teal-900 input input-bordered" placeholder="Enter Mail" />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Jewelry Name</span>
              </label>
              <input type="text" name="jewelryName" placeholder="Jewelry Name" className="border-teal-900 input input-bordered" />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Photo-Url</span>
              </label>
              <input type="url" name="photo" placeholder="photo-url" className="input input-bordered border-teal-900" />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" name="price" placeholder="price" className="input input-bordered border-teal-900" />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="number" name="rating" placeholder="ratings" className="input input-bordered border-teal-900" />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Avail.Qty</span>
              </label>
              <input type="number" name="quantity" placeholder="quantity"
                className="input input-bordered border-teal-900" />
            </div>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea name="description"
              className="textarea w-full input-bordered border-teal-900"
              placeholder="Description"
            ></textarea>
          </div>
          <button type="submit" className="btn text-white bg-teal-900">
            Add Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJewelry;
