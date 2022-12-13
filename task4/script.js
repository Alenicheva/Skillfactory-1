const textContent = document.querySelector('a');

textContent.addEventListener('click', function(event) {
this.textContent = prompt('Введите текст');
event.preventDefault();
})