
$('.addBtn').click(function(){
    $('#type').val('add')
    $('#exampleModalLabel').text('Add Job')

})

$('.deleteBtn').click(function(){
    $('#deleteID').val($(this).attr("data-id"))
})

$('.editBtn').click(function(){
    id = $(this).attr("data-id")
    $("#exampleModal").modal("show");
    $.ajax({
      type: "POST",
      url: "controller/manage-job.php", // Replace with your server-side script URL
      data: { update: id }, // Properly format data as an object
      dataType: "json", // Specify the expected data type of the response
      success: function(response) {
        const data = response[0];
          $('#id').val(data.job_id)
          $('#description').val(data.job_description)
          $('#address').val(data.job_address)
          $('#name').val(data.job_name)
          $('#position').val(data.job_position)
          $('#exampleModalLabel').text('Update Job')
          $('#type').val('update')
      },
      error: function() {
          // Handle errors
          $("#result").html("An error occurred.");
      }
  });
})

$("#formAdd, #formDelete").submit(function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get form data
  var formData = new FormData(this);

  // Send an Ajax POST request
  $.ajax({
      type: "POST",
      url: "controller/manage-job.php", // Replace with your server-side script
      data: formData,
      contentType: false, // Don't set content type to false if you want jQuery to set it
      processData: false, // Don't process the data (this is for FormData)
      success: function(response) {
          console.log(response);
          if (response.trim() === '200') {
              // Show a success SweetAlert
              Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'Operation successful!'
              }).then(function() {
                  // Redirect to manage-topic.php
                  window.location.href = 'job.php';
              });
          } else {
              // Show an error SweetAlert
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error!'
              });
          }
      },
      error: function() {
          // Handle errors
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred!'
          });
      }
  });
});


