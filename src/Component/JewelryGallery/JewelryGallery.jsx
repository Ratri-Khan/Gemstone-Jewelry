// import{ useEffect } from 'react'
import hero1 from '../../assets/makeupGallary/collection13.jpeg';
import hero2 from '../../assets/makeupGallary/collection12.jpg';
import hero4 from '../../assets/makeupGallary/collection9.webp';
import hero8 from '../../assets/makeupGallary/collection11.jpg';
import hero3 from '../../assets/makeupGallary/collection10.jpg';
// import AOS from "aos";
// import "aos/dist/aos.css";

const MakeupGallary = () => {
  // useEffect(() => {
  //   AOS.init({
  //     // Customize AOS options here (optional)
  //   });
  // }, []);

  return (
    <div className="bg-black">
      <p className="text-5xl text-white font-serif text-center" data-aos="fade-up">
        Our Product Collection
      </p>

      <section className=" dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={hero1}
            alt=""
            data-aos="fade-left"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            data-aos="fade-down"
            src={hero2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={hero8}
            data-aos="fade-down"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={hero3}
            data-aos="fade-up"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={hero4}
            data-aos="fade-up"
          />
        </div>
      </section>
    </div>
  );
}
export default MakeupGallary;