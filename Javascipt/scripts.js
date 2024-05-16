function validateForm() {
  const requiredFields = document.querySelectorAll("textarea[required]");
  for (let field of requiredFields) {
    if (field.value.trim() === "") {
      alert("Please fill all the required fields.");
      field.focus();
      return false;
    }
  }
  window.location.href = 'page_4.html';
  return false; // Prevent form submission to handle redirection with JavaScript
}

// JavaScript to handle conditional visibility based on user choices
document.getElementById('externallyFunded').addEventListener('change', function () {
  document.getElementById('fundingDetails').style.display = 'block';
});
document.getElementById('selfFunded').addEventListener('change', function () {
  document.getElementById('fundingDetails').style.display = 'none';
});

document.getElementById('paymentParticipants').addEventListener('change', function () {
  if (this.value === 'Yes') {
    document.getElementById('paymentDetails').style.display = 'block';
  } else {
    document.getElementById('paymentDetails').style.display = 'none';
  }
});

document.getElementById('conflictYes').addEventListener('change', function () {
  document.getElementById('conflictDetails').style.display = 'block';
});
document.getElementById('conflictNo').addEventListener('change', function () {
  document.getElementById('conflictDetails').style.display = 'none';
});

document.getElementById('risksResearchers').addEventListener('change', function () {
  if (this.value === 'Yes') {
    document.getElementById('risksResearchersDetails').style.display = 'block';
  } else {
    document.getElementById('risksResearchersDetails').style.display = 'none';
  }
});


