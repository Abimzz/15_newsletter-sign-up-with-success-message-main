const formCard = document.getElementById('formCard');
const form = document.getElementById('subscribeForm');
const errorMsg = document.getElementById('errorMsg');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const successCard = document.getElementById('successCard');
const userEmail = document.getElementById('userEmail');
const dismissBtn = document.getElementById('dismissBtn');

submitBtn.addEventListener('click', () => {
    signupForm.classList.add('dismiss');
    successMessage.classList.add('active');
});

dismissBtn.addEventListener('click', () => {
    successMessage.classList.remove('active');
    signupForm.classList.remove('dismiss');
});

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const emailValue = emailInput.value.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailValue || !emailRegex.test(emailValue)) {
//       errorMsg.style.display = 'block';
//       emailInput.focus();
//     } else {
//       submitBtn.style.display = 'none';
//       // Insert submitted email into success message
//       userEmail.textContent = emailValue;

//       // Hide form card and show success card
//       formCard.classList.add('dismiss');
//       successCard.classList.add('active');}
//     })

// submitBtn.addEventListener('click', function(event)  {
//   event.preventDefault();
//   const emailValue = emailInput.value.trim();
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailValue || !emailRegex.test(emailValue)) {
//     errorMsg.style.display = 'block';
//     emailInput.focus();
//   } else {
//     errorMsg.style.display = 'none';
//     userEmail.textContent = emailValue;

//   formCard.classList.add('dismiss');
//   successCard.classList.add('active');}
// })



// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     const emailValue = emailInput.value.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailValue || !emailRegex.test(emailValue)) {
//     errorMsg.style.display = 'block';
//     emailInput.focus();
//     } else {
//     errorMsg.style.display = 'none';

//     userEmail.textContent = emailValue;

    
//     formCard.classList.add('dismiss');
//     successCard.classList.add('active');
//     }
// });

// dismissBtn.addEventListener('click', () => {
//     emailInput.value = '';
//     formCard.classList.remove('active');
//     successCard.classList.remove('dismiss');
// });





