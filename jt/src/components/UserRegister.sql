CREATE DATABASE user_register;

USE user_register;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    re_enter_password VARCHAR(255) NOT NULL,
    last_name VARCHAR(50),
    first_name VARCHAR(50),
    phone_number VARCHAR(15),
    address VARCHAR(100),
    age INT,
    birth_date DATE,
    user_type ENUM('Job Applicant', 'Job Provider'),
    gender ENUM('Male', 'Female', 'Other'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
