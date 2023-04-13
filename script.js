function getFormvalue() {
    //Write your code here
	// Get the form element
  const form = document.getElementById('form1');
	// Get the values of first name and last name input fields
	let firstName = document.getElementById("fname").value;
	let lastName = document.getElementById("lname").value;
	 
	// Show an alert with the first and last name
   alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Add event listener to form submit
// const form = document.getElementById('form1');
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission
//   getFormValue(); // Call the getFormValue()
	






