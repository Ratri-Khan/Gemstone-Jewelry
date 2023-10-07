import { Link } from "react-router-dom";
// import logo from '../../assets/logo.png'

const Header = () => {

    return (
        <div className="bg-fuchsia-700 py-4 flex justify-between text-white font-bold items-center px-14">
            <div>
                {/* <img src={logo} alt="" /> */}
                <p>Gemstone-Jewelry</p>
            </div>
            <ul className="flex">
                <li className="mr-7"><Link to="/">Home</Link></li>
                <li className="mr-7"><Link to="/allJewelry">All-Jewelry</Link></li>
                <li className="mr-7"><Link to="/myJewelry">My-jewelry</Link></li>
                <li className="mr-7"><Link to="/addJewelry"> Add-Jewelry</Link></li>
                <li className="mr-7"><Link to="/blogs"> Blogs</Link></li>
                <li className="mr-7"><Link to="/login"> Login</Link></li>
                <li><Link to="/register"> Register</Link></li>
            </ul>
        </div>
    );
};

export default Header;