function getFormvalue() {
    // Get the form element
    const form = document.getElementById('form1');
  
    // Get the values of first name and last name input fields
    const firstName = form.elements.fname.value;
    const lastName = form.elements.lname.value;
  
    // Show an alert with the first and last name
    alert(`${firstName} ${lastName}`);
  }
  
  // Add event listener to form submit
  const form = document.getElementById('form1');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    getFormvalue(); // Call the getFormValue() function
  });






