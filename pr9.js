// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        // Переключаем класс 'hidden' для скрытия или отображения элемента
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }
}

// Функция для извлечения значения параметра utm_term и изменения текста H1
function changeHeaderBasedOnUTM() {
    // Извлекаем параметр utm_term из URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');

    // Находим элемент H1 на странице
    const h1 = document.querySelector('h1');

    // Если utm_term присутствует, меняем текст в H1
    if (utmTerm) {
        h1.textContent = utmTerm;
    } else {
        // Если параметра нет, оставляем текст H1 по умолчанию
        h1.textContent = 'По умолчанию';
    }
}
