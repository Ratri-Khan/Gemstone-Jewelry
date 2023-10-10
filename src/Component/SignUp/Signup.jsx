import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, handleGoogleSignIn ,updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(name, email, password);

        if (password.length < 6) {
            setError('password must be 6 character');
            return;
        }
        if (password !== confirmPassword) {
            setError('Your password did not match');
            return
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile({
                    displayName: name,
                    // photoURL: imgURL
                })
                console.log('created user', user);
                navigate(from, { replace: true })
                // navigate(from, { replace: true })
            })
            .catch(error => console.log(error))

    }
    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    {/* <img src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="displayName" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='confirmPassword' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className='text-red-700'>
                                {error}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-teal-900 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className=' text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                        <div>
                        <button onClick={handleGoogle} className='bg-slate-300 rounded p-3' m-auto>Login With Google</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default SignUp;