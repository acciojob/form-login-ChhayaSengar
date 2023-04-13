function getFormvalue() {
    //Write your code here
	// Get the form element
  const form = document.getElementById('form1');
	// Get the values of first name and last name input fields
	let firstName = document.getElementById("fname").value;
	let lastName = document.getElementById("lname").value;
	
   alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

const form = document.getElementById('form1');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  getFormValue(); // Call the getFormValue()
	






