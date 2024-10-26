import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'; // Your login component
import Register from './Pages/Register';
import AdminDashboard from './Pages/AdminDashboard';
// import Register from './Register'; // Your register component


const AppController = () => {
    return (
        <Router>
            <Routes>
                
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/admin-dashboard" element={<AdminDashboard/>} />
                {/* <Route path="/user-dashboard" element={<UserDashboard />} /> */}
            </Routes>
        </Router>
    );
};

export default AppController