import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery for tilt effect or other purposes
import 'tilt.js'; // Import tilt.js
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize tilt effect for elements with the .js-tilt class
        const tiltElements = $('.js-tilt');
        if (tiltElements.length > 0) {
            tiltElements.tilt({ scale: 1.1 });
        }

        // Cleanup tilt effect when component unmounts
        return () => {
            if (tiltElements.length > 0) {
                tiltElements.tilt.destroy.call(tiltElements);
            }
        };
    }, []);

    // Handle form submission to register the user
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(document.getElementById("registerForm"));
        const data = Object.fromEntries(formData.entries());

        // Check if passwords match
        if (data.password !== data.re_password) {
            alert("Passwords do not match.");
            return;
        }
        
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.message) {
                alert(result.message);
                navigate('/login'); // Redirect to login page on successful registration
            } else if (result.error) {
                alert(result.error || "Registration failed. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred. Please try again.");
        });
    };

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form id="registerForm" className="login100-form validate-form" onSubmit={handleSubmit}>
                            <span className="login100-form-title">Register</span>

                            {/* Last Name */}
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="lname" placeholder="Last name" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* First Name */}
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="fname" placeholder="First name" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* User Type */}
                            <div className="wrap-input100">
                                <select className="input100" name="position" required>
                                    <option value="">Select User Type</option>
                                    <option value="Job Applicant">Job Applicant</option>
                                    <option value="Job Provider">Job Provider</option>
                                </select>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Email */}
                            <div className="wrap-input100">
                                <input className="input100" type="email" name="email" placeholder="Email" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Password */}
                            <div className="wrap-input100">
                                <input className="input100" type="password" name="password" placeholder="Password" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Re-Enter Password */}
                            <div className="wrap-input100">
                                <input className="input100" type="password" name="re_password" placeholder="Re-Enter Password" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Phone Number */}
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="phone" placeholder="Phone Number" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Address */}
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="address" placeholder="Address" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Gender */}
                            <div className="wrap-input100">
                                <select className="input100" name="sex" required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-venus-mars" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Birthdate */}
                            <div className="wrap-input100">
                                <input className="input100" type="date" name="birthdate" placeholder="Birthdate" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Age */}
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="age" placeholder="Age" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-id-card" aria-hidden="true"></i>
                                </span>
                            </div>

                            {/* Register Button */}
                            <div className="container-login100-form-btn">
                                <button 
                                    className="login100-form-btn" 
                                    type="button" 
                                    onClick={handleSubmit}
                                >
                                    Register
                                </button>
                            </div>

                            {/* Redirect to Login */}
                            <div className="text-center p-t-12">
                                <Link className="txt2" to="/login">
                                    Login to your account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
