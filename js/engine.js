$(document).ready(function() {
  $("#form2").validate({
    rules: {
      username:{
        required:true,
        minlength:5
      },
      first_name : {
        required: true,
        minlength: 3
      },
      last_name :{
        required: true,

      },
      age: {
        required: true,
        number: true,
        min: 18
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required:true,
        minlength:8
      },
      confirm_password: {
        required:true,
        equalto:"#password"
      },
      
    },
    messages : {
     first_name: {
        minlength: "Name should be at least 3 characters"
      },
      age: {
        required: "Please enter your age",
        number: "Please enter your age as a numerical value",
        min: "You must be at least 18 years old"
      },
      email: {
        email: "The email should be in the format: abc@domain.tld"
      },
      password: {
        required:"Necessary"
      },
      confirm_password: {
        equalto:"DID not matches"
      },
      weight: {
        required: "People with age over 50 have to enter their weight",
        number: "Please enter your weight as a numerical value"
      },

    }
  });
});