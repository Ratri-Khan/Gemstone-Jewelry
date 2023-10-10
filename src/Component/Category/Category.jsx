import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const Category = () => {
  const [tabtext, setTabText] = useState("Ear Ring");
  const [jewelries, setJewelries] = useState([]);

  useEffect(() => {
    fetch(
      `https://gemstone-jewelry-server.vercel.app/categories?subCategory=${tabtext}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJewelries(data)
      });
  }, [tabtext]);


  return (
    <div className="w-5/6 m-auto">
      <p className="text-5xl font-serif text-center text-white">
        Our Product Category
      </p>

      <Tabs className='text-white'>
        <TabList>
          <Tab onClick={() => setTabText("Ear Ring")}>Ear Ring</Tab>
          <Tab onClick={() => setTabText("Necklace")}>Necklace</Tab>
          <Tab onClick={() => setTabText("Bracelet")}>Bracelet</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-3 gap-3 w-full">
            {jewelries.map((jewelry) => (
              <div
                key={jewelry._id}
                className="card bg-teal-900 p-3 w-80 shadow-xl">
                <figure>
                  <img
                    src={jewelry.photoUrl}
                    className="w-full h-60 object-cover"
                    alt={jewelry.jewelryName} />
                </figure>
                <div className="py-7">
                  <h2 className="">Jewelry Name: {jewelry.jewelryName}</h2>
                  <h2 className="">Price: ${jewelry.price}</h2>
                  <h2 className="">Rating: {jewelry.rating}</h2>
                  <Link to={`/details/${jewelry._id}`}><button className='shadow-white shadow-xl border-2 border-white p-3 rounded mt-3'>view Details</button></Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-3 w-full">
            {jewelries.map((jewelry) => (
              <div
                key={jewelry._id}
                className="card bg-teal-900 p-3 w-80 shadow-xl">
                <figure>
                  <img
                    src={jewelry.photoUrl}
                    className="w-full h-60 object-cover"
                    alt={jewelry.jewelryName} />
                </figure>
                <div className="py-7">
                  <h2 className="">Jewelry Name: {jewelry.jewelryName}</h2>
                  <h2 className="">Price: ${jewelry.price}</h2>
                  <h2 className="">Rating: {jewelry.rating}</h2>
                  <Link to={`/details/${jewelry._id}`}><button className='shadow-white shadow-xl border-2 border-white p-3 rounded mt-3'>view Details</button></Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-3 w-full">
            {jewelries.map((jewelry) => (
              <div
                key={jewelry._id}
                className="card bg-teal-900 p-3 w-80 shadow-xl">
                <figure>
                  <img
                    src={jewelry.photoUrl}
                    className="w-full h-60 object-cover"
                    alt={jewelry.jewelryName} />
                </figure>
                <div className="py-7">
                  <h2 className="">Jewelry Name: {jewelry.jewelryName}</h2>
                  <h2 className="">Price: ${jewelry.price}</h2>
                  <h2 className="">Rating: {jewelry.rating}</h2>
                  <Link to={`/details/${jewelry._id}`}><button className='shadow-white shadow-xl border-2 border-white p-3 rounded mt-3'>view Details</button></Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Category;
// **********************************************
