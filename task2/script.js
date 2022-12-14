const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщений в веб консоль');
})

let Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    prompt('Метод для ввода текста через диалоговое окно');
})

let Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Метод для вывода сообщений на экран');
})