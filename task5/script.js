let input = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');

input.addEventListener('input', (event) => {
duplicateField.textContent = input.value;
event.preventDefault();
})
