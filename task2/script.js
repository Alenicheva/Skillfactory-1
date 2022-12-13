const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщений в веб консоль');
})

let prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Метод для ввода текста через диалоговое окно');
})

let Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Метод для вывода сообщений на экран');
})