document.querySelector("button").addEventListener("click", function() {
    alert("Welcome to my portfolio!");
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const allInputs = form.querySelectorAll('input');
  let isAllFilled = true;

  for (const input of allInputs) {
    if (!input.value) {
      isAllFilled = false;
      break;
    }
  }

  if (!isAllFilled) {
    alert('Please fill out all fields');
    return;
  }

  form.submit();

  const popup = document.createElement('div');
  popup.classList.add('success-popup');
  popup.innerHTML = 'Message Sent';

  document.body.appendChild(popup);

  setTimeout(function() {
    document.body.removeChild(popup);
  }, );
});