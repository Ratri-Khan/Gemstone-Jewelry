import { Link } from "react-router-dom";
// import logo from '../../assets/logo.png'

const Header = () => {

    return (
        <div className="bg-teal-900 py-4 flex justify-between text-white font-bold items-center px-14">
            <div>
                {/* <img src={logo} alt="" /> */}
                <p>Gemstone-Jewelry</p>
            </div>
            <ul className="flex">
                <li className="mr-7"><Link to="/"><small>Home</small></Link></li>
                <li className="mr-7"><Link to="/allJewelry"><small>All-Jewelry</small></Link></li>
                <li className="mr-7"><Link to="/myJewelry"><small>My-jewelry</small></Link></li>
                <li className="mr-7"><Link to="/addJewelry"> <small>Add-Jewelry</small></Link></li>
                <li className="mr-7"><Link to="/blogs"> <small>Blogs</small></Link></li>
                <li className="mr-7"><Link to="/login"> <small>Login</small></Link></li>
                <li><Link to="/register"> <small>Register</small></Link></li>
            </ul>
        </div>
    );
};

export default Header;