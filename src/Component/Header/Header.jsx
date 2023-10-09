import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import logo from '../../assets/logo.png'

const Header = () => {
    const { user ,logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }

    return (
        <div className="bg-teal-900 py-4 flex justify-between text-white font-bold items-center px-14">
            <div>
                {/* <img src={logo} alt="" /> */}
                <p>Gemstone-Jewelry</p>
            </div>
            <ul className="flex">
                <li className="mr-7">
                    <Link to="/"><small>Home</small></Link>
                </li>
                <li className="mr-7">
                    <Link to="/allJewelry"><small>All-Jewelry</small></Link>
                </li>
                <li className="mr-7">
                    <Link to="/myJewelry"><small>My-jewelry</small></Link>
                </li>
                <li className="mr-7">
                    <Link to="/addJewelry"> <small>Add-Jewelry</small></Link>
                </li>
                <li className="mr-7">
                    <Link to="/blogs"> <small>Blogs</small></Link>
                </li>
                <li className="mr-7">
                {
                    user ? <>
                        {/* <img src={user.displayURL} alt="" /> */}
                        <p>{user.displayName}</p>
                        <button className="bg-white rounded text-teal-900 px-4 py-2" onClick={handleLogOut}>Logout</button>
                        </> :
                        <>
                            <Link to="/login"> <small>Login</small></Link>
                            <Link to="/signUp"> <small>Register</small></Link>
                        </>
                }
                </li>


            </ul>
        </div>
    );
};

export default Header;