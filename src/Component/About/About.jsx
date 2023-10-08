import image from '../../assets/About/about1.jpg'
import image1 from '../../assets/About/about2.jpg'
import image2 from '../../assets//About/about4.jpg'
import image3 from '../../assets/About/about5.jpg'
// import SectionTitle from '../../components/SectionTitle';
import { Fade, Slide } from "react-awesome-reveal";
// import SectionTitle from '../../component/SectionTitle';

const About = () => {
    return (
        <div className=' py-14 w-4/5 m-auto text-white'>
            <div>
                <Slide direction='up'>
                    {/* <SectionTitle
                        heading={"About Us"}
                        subHeading={"Read More About Create-Jewelry"}
                    ></SectionTitle> */}
                </Slide>
            </div>
            <div className='container mx-auto'>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
                    <div className='lg:p-0 px-3'>
                        <Slide>
                            <h3 className='text-xl font-semibold text-teal-900 mb-3'>A short overview about us.</h3>
                        </Slide>
                        <Fade delay={400}>
                            <div>
                                <p> Welcome to <b>Create Jewelry</b> , your ultimate destination for jewelry-making training and inspiration. Our platform is dedicated to empowering individuals with the knowledge and skills needed to create stunning jewelry pieces.</p>

                                <p> At [Your Website Name], we believe that jewelry making is an art form that allows individuals to express their creativity and showcase their unique style. Whether you are a beginner with no prior experience or an experienced jewelry maker looking to enhance your skills, our comprehensive training resources are designed to cater to all skill levels.</p>
                                <p>
                                    Our team of passionate and experienced jewelry artisans has curated a diverse range of tutorials, tips, and techniques to guide you through the fascinating world of jewelry making. From basic fundamentals to advanced methods, we cover various aspects such as wirework, beading, metalworking, stone setting, and more.
                                </p>
                                <p>
                                    we are here to guide you every step of the way. Join our community today and embark on a captivating journey of jewelry-making excellence.

                                    Start exploring, learning, and let your imagination sparkle with <b>Create Jewelry</b>
                                </p>
                            </div>
                        </Fade>


                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-4'>

                        <img className='lg:h-[210px] md:w-full border p-3 border-teal-900' src={image} alt="" />

                        <img className='lg:h-[210px] md:w-full border p-3 border-teal-900' src={image1} alt="" />

                        <img className='lg:h-[210px] md:w-full border p-3 border-teal-900' src={image2} alt="" />

                        <img className='lg:h-[210px] md:w-full border p-3 border-teal-900' src={image3} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;