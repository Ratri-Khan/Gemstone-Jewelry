import errorImg from '../../assets/error.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="w-4/12 mx-auto p-4  flex flex-col justify-center">
      <img src={errorImg} className='text-center image-full object-cover'/>
      <Link to ='/' className='text-center my-4  text-blue-500 font-bold  '>Back to Home</Link>
    </div>
  );
}

export default Error