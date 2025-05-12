function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value.trim();

  if (!name || !email || !service) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Appointment booked successfully!");
  return true;
}

