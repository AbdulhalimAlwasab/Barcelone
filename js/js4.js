document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission


  // Get the input values
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var name = document.getElementById('nname').value;

  // Create a new row in the table
  var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);

  // Insert cells in the row
  var nameCell = newRow.insertCell(0);
  var lastnameCell = newRow.insertCell(1);
  var ageCell = newRow.insertCell(2);
  var emailCell = newRow.insertCell(3);
  var nnameCell = newRow.insertCell(4);

  // Add the input values to the cells
  nameCell.innerHTML = name;
  lastnameCell.innerHTML = lastname;
  ageCell.innerHTML = age;
  emailCell.innerHTML = email;
  nnameCell.innerHTML = name;

  // Clear the form inputs
  document.getElementById('name').value = '';
  document.getElementById('lastname').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value ='';
  document.getElementById('nname').value = '';
});
// Show/hide contact form
function showForm() {
    var form = document.getElementById('contact-form');
    var message = document.getElementById('message');
    
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
    
    message.style.display = 'none';
  }
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform form validation
    
    // Display success message
    var message = document.getElementById('message');
    message.style.display = 'block';
  });
  
  // Approve comment
  function approveComment() {
    // Update approval counter
    var approvalCounter = document.getElementById('approval-counter');
    approvalCounter.textContent = parseInt(approvalCounter.textContent) + 1;
  }
  
  // Disapprove comment
  function disapproveComment() {
    // Update disapproval counter
    var disapprovalCounter = document.getElementById('disapproval-counter');
    disapprovalCounter.textContent = parseInt(disapprovalCounter.textContent) + 1;
  }
  
  // Handle table form submission
  document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // steart Abut
  
    //End Abut
    // Create table row
    
    // Append row to table
  });
  