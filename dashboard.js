// Handle navigation between sections
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
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
