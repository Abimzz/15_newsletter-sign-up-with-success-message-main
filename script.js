const signupForm = document.getElementById('signupForm');
const submitButton = document.getElementById('submitButton');
const successMessage = document.getElementById('successMessage');
const dismissButton = document.getElementById('dismissButton');

submitButton.addEventListener('click', () => {
    signupForm.classList.add('dismiss');
    successMessage.classList.add('active');
});

dismissButton.addEventListener('click', () => {
    successMessage.classList.remove('active');
    signupForm.classList.remove('dismiss');
})