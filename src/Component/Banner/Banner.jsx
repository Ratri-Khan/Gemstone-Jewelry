import banner1 from '../../assets/Banner/Banner-1.jpg';
import banner2 from '../../assets/Banner/Banner-2.jpg';
import banner3 from "../../assets/Banner/Banner-3.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-4/12  rounded-l-md h-[450px] bg-teal-200 pl-8 flex justify-center items-center">
        <div className="">
          <p className="text-4xl text-center  font-semibold leading-none italic">
            {" "}
            Original and authentic  makeup product purchase
            from our shop
          </p>
        </div>
      </div>
      {/* second half */}
      
      <div className="w-8/12">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={banner1} className="w-full h-[450px] rounded-md" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={banner2} className="w-full h-[450px] rounded-md" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={banner3} className="w-full h-[450px] rounded-md" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn bg-teal-900 text-white btn-xs">
            1
          </a>
          <a href="#item2" className="btn bg-teal-900 text-white btn-xs">
            2
          </a>
          <a href="#item3" className="btn bg-teal-900 text-white btn-xs">
            3
          </a>
        </div>
      </div>
      </div>
  );
}

export default Banner;