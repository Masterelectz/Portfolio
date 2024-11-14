document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Contact Form Validation
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Clear any previous error messages
    clearErrors();
  
    // Validate form fields
    let valid = true;
    
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Name is required');
      valid = false;
    }
  
    if (emailInput.value.trim() === '') {
      showError(emailInput, 'Email is required');
      valid = false;
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address');
      valid = false;
    }
  
    if (messageInput.value.trim() === '') {
      showError(messageInput, 'Message cannot be empty');
      valid = false;
    }
  
    // If form is valid, show a success message or proceed with form submission
    if (valid) {
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    }
  });
  
  // Function to validate email format
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  // Function to display error messages
  function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
    input.classList.add('error');
  }
  
  // Function to clear error messages
  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
  }