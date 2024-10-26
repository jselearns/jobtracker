import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import $ from 'jquery'; // Ensure correct jQuery import
import 'tilt.js'; // Import tilt.js to enable the tilt effect
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        // Ensure that the .js-tilt elements are properly selected
        const tiltElements = $('.js-tilt');

        // Check if elements exist to avoid applying tilt on non-existent elements
        if (tiltElements.length > 0) {
            tiltElements.tilt({
                scale: 1.1,
            });
        }

        // Cleanup function to destroy tilt on unmount
        return () => {
            if (tiltElements.length > 0) {
                tiltElements.tilt.destroy.call(tiltElements);
            }
        };
    }, []);

    // Function to handle login
    const handleLogin = (event) => {
        event.preventDefault();

        // Simple check to differentiate between admin and user
        if (email === 'admin@gmail.com') {
            alert('Admin logged in');
            navigate('/admin-dashboard'); // Navigate to admin dashboard
        } else if (email === 'user@gmail.com') {
            alert('User logged in');
            navigate('/user-dashboard'); // Navigate to user dashboard
        } else {
            alert('Invalid login credentials');
        }
    };

    // Function to handle "Create Account" navigation
    const handleCreateAccount = (event) => {
        event.preventDefault();
        navigate('/register'); // Navigate to register page
    };

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src="job.jpg" alt="IMG" />
                        </div>

                        <form id="loginForm" className="login100-form validate-form" onSubmit={handleLogin}>
                            <span className="login100-form-title"></span>

                            <div className="wrap-input100" data-validate="Valid email is required: ex@abc.xyz">
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update email state
                                    required
                                />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100" data-validate="Password is required">
                                <input
                                    className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Update password state
                                    required
                                />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button type="submit" className="login100-form-btn">
                                    Login
                                </button>
                            </div>

                            <div className="text-center p-t-12">
                                <span className="txt1">Don’t have an account? </span>
                                <a className="txt2" href="#" onClick={handleCreateAccount}>
                                    Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* External JS scripts */}
            <script src="assets/vendor/jquery/jquery-3.2.1.min.js"></script>
            <script src="assets/vendor/bootstrap/js/popper.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/vendor/select2/select2.min.js"></script>
            <script src="assets/vendor/tilt/tilt.jquery.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
            <script src="assets/js/main.js"></script>
        </div>
    );
};

export default Login;
