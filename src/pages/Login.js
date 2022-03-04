import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from '../Utilities/logos/logo.png';

const Login = () => {
    const { user, googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';
    // console.log(from)

    if (user.email) {
        navigate(from);
    }

    return (
        <div className="login__wrapper">
            <div className="container">
                <div className="login__wrap">
                    <div className="logo__top">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>

                    <div className="login__content">
                        <h2>Login With</h2>
                        <div className='g__signin'>
                            <button onClick={googleSignIn} className='google__login__btn'>
                                <i className="fa-brands fa-google"></i> Continue with Google</button>
                        </div>
                        <div>
                            <p>Don't have an account? <span className='login__span'><Link to="">
                                Create an account</Link> </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;