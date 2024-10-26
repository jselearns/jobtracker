import React, { useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {

    // Use useEffect to manage DOM manipulations after the component mounts
    useEffect(() => {
        // Handle navigation between sections
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove 'active' class from all nav links
                document.querySelectorAll('.nav-link').forEach(nav => {
                    nav.classList.remove('active');
                });

                // Add 'active' class to the clicked nav link
                this.classList.add('active');

                // Hide all content sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });

                // Show the target content section
                const target = this.getAttribute('data-target');
                document.getElementById(target).classList.add('active');
            });
        });

        // Handle Edit button click (opens a modal for editing jobs)
        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Open modal logic (you would need to create a modal HTML structure)
                const row = e.target.closest('tr');  // Get the parent row of the clicked button

                // Log the data (for debugging purposes)
                console.log(row.cells[1].textContent);  // Job Title
                console.log(row.cells[2].textContent);  // Job Position

                // In a real scenario, you would populate the modal form with these values
                // Show the modal here (you would need modal HTML and show/hide logic)
                // Example:
                // document.getElementById('editModal').style.display = 'block';
            });
        });

        // Handle Delete button click (remove job row from table)
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const row = e.target.closest('tr');  // Get the parent row of the clicked button
                row.remove();  // Remove the row from the table
            });
        });
    }, []); // Empty dependency array to ensure this runs only once after the component mounts

    return (
        <div>
            <div className="container">
                <header>
                    <h1>Tracker | Job Provider</h1>
                    <div className="admin-welcome">
                        <span>Welcome! ADMIN</span>
                        <img src="icon.jpg" alt="Admin Icon" className="admin-icon" />
                    </div>
                </header>

                <div className="sidebar">
                    <nav>
                        <ul>
                            <li><a href="#" className="nav-link active" data-target="job-table-section">Job</a></li>
                            <li><a href="#" className="nav-link" data-target="job-applicants-section">Job Applicants</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="main-content">
                    {/* Manage Job Section */}
                    <section id="job-table-section" className="content-section active">
                        <div className="manage-job">
                            <h2>Manage Job</h2>
                            <button className="add-job-btn">+ Add Job</button>
                        </div>
                        <table className="job-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Job Title</th>
                                    <th>Job Position</th>
                                    <th>Job Description</th>
                                    <th>Job Address</th>
                                    <th>Job Posted</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marketing Manager</td>
                                    <td>Managerial</td>
                                    <td>Lead Marketing Campaigns</td>
                                    <td>789 Main St</td>
                                    <td>2024-06-13</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Sales Executive</td>
                                    <td>Executive</td>
                                    <td>Manage Sales Team</td>
                                    <td>101 Main St</td>
                                    <td>2024-06-13</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Programming</td>
                                    <td>Junior Programmer</td>
                                    <td>Programmer</td>
                                    <td>China</td>
                                    <td>2024-06-19</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* Job Applicants Section */}
                    <section id="job-applicants-section" className="content-section">
                        <div className="manage-job">
                            <h2>My Job Applications</h2>
                        </div>
                        <table className="job-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Job Title</th>
                                    <th>Job Position</th>
                                    <th>Job Description</th>
                                    <th>Job Address</th>
                                    <th>Job Posted</th>
                                    <th>Job Apply Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marketing Manager</td>
                                    <td>Managerial</td>
                                    <td>Lead Marketing Campaigns</td>
                                    <td>789 Main St</td>
                                    <td>2024-06-13</td>
                                    <td>Pending</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Sales Executive</td>
                                    <td>Executive</td>
                                    <td>Manage Sales Team</td>
                                    <td>101 Main St</td>
                                    <td>2024-06-13</td>
                                    <td>Pending</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Programming</td>
                                    <td>Junior Programmer</td>
                                    <td>Programmer</td>
                                    <td>China</td>
                                    <td>2024-06-19</td>
                                    <td>Pending</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
