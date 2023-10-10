import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import logo from '../../assets/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }

    return (
        <div className="bg-teal-900 py-4 md:flex lg:flex justify-between text-white font-bold items-center text-center md:px-14">
            <div>
                <p>Gemstone-Jewelry</p>
            </div>
            <ul>
                <li className="mr-7">
                    {
                        user ? <>
                            <Link to="/" className="mr-7"><small>Home</small></Link>
                            <Link to="/addJewelry" className="mr-7"> <small>Add-Jewelry</small>
                            </Link>
                            <Link to="/myJewelry" className="mr-7"><small>My-jewelry</small></Link>
                            <Link to="/allJewelry" className="mr-7"><small>All-Jewelry</small></Link>
                            <Link to="/blogs" className="mr-7"> <small>Blogs</small></Link>
                            <button className="bg-white rounded text-teal-900 px-4 py-2" onClick={handleLogOut}>Logout</button>
                        </> :
                            <>
                                <Link to="/" className="mr-7"><small>Home</small></Link>

                                <Link to="/addJewelry" className="mr-7"> <small>Add-Jewelry</small></Link>
                                <Link to="/allJewelry" className="mr-7"><small>All-Jewelry</small></Link>
                                <Link to="/blogs" className="mr-7"> <small>Blogs</small></Link>
                                <Link to="/login" className="mr-7"> <small>Login</small></Link>
                                <Link to="/signUp"> <small>Register</small></Link>
                            </>
                    }
                </li>
            </ul>
        </div>
    );
};

export default Header;