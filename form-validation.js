$(document).ready(function() {
  // Initialize form validation on the registration form.
  $("#registration-form").validate({
      // Specify validation rules
      rules: {
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              minlength: 5
          },
          firstname: "required",
          lastname: "required",
          zipcode: {
              required: true,
              digits: true,
              minlength: 5,
              maxlength: 5
          },
          phonenumber: {
              required: true
          }
      },
      // Specify validation error messages
      messages: {
          password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
          },
          email: "Please enter a valid email address",
          firstname: "Please enter your first name",
          lastname: "Please enter your last name",
          zipcode: {
              required: "Please enter a 5-digit ZIP code",
              digits: "ZIP code must contain only digits",
              minlength: "ZIP code must be 5 digits",
              maxlength: "ZIP code must be 5 digits"
          },
          phonenumber: "Please enter a phone number"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
          form.submit();
      }
  });
});
