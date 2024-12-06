// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для вывода текущего времени в формате "ЧЧ:ММ:СС"
function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

function toggleVisibility() {
    const element = document.querySelector(".content");
    if (element) {
        element.style.display = element.style.display === "none" ? "block" : "none";
    } else {
        console.error(`Элемент с селектором "${".content"}" не найден.`);
    }
}

// Вызов функции showMessage сразу после её определения
showMessage("Скрипт загружен!");

// Вызов функции logCurrentTime сразу после showMessage
logCurrentTime();

// Используем обработчик события DOMContentLoaded, чтобы убедиться, что страница загружена перед изменениями
document.addEventListener('DOMContentLoaded', function() {
    // 1. Сбрасываем фон страницы на белый
    resetBackgroundColor();

    // 2. Изменяем фон страницы на "black"
   // changeBackgroundColor("black");

    // 3. Переключаем видимость элемента с классом .content
    toggleVisibility();
});

// Функция для извлечения значения параметра utm_term и изменения текста H1
function updateH1FromUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");

    const h1Element = document.querySelector("h1");
    if (h1Element) {
        h1Element.textContent = utmTerm || "Заголовок по умолчанию";
    } else {
        console.error("Элемент H1 не найден.");
    }
}

updateH1FromUtmTerm();

document.addEventListener("DOMContentLoaded", function() {
    const h1Element = document.querySelector("h1");
    if (h1Element) {
        h1Element.addEventListener("click", function() {
            alert("Вы кликнули на заголовок - так держать!");
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const studentPhoto = document.getElementById("studentPhoto");

    // Увеличение изображения при наведении мыши
    studentPhoto.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });

    // Возврат к исходному размеру при убирании мыши
    studentPhoto.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });

    // Замена изображения при клике
    studentPhoto.addEventListener("click", function() {
        this.src = "teacherPhotography.png"; // Замените на путь к фотографии преподавателя
        this.alt = "Фото любимого преподавателя";
    });

    // Alert при двойном клике
    studentPhoto.addEventListener("dblclick", function() {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach((paragraph) => {
        paragraph.addEventListener("click", function() {
            // Генерация случайного цвета
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            this.style.backgroundColor = randomColor;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const studentPhoto = document.getElementById("studentPhoto");

    studentPhoto.addEventListener("mouseover", function() {
        this.style.transition = "transform 0.5s ease";
        this.style.transform = "rotate(360deg)";
    });

    studentPhoto.addEventListener("mouseout", function() {
        this.style.transform = "rotate(0deg)";
    });
});
