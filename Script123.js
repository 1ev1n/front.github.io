document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changePracticesButton");
    const table = document.querySelector("#prac + table");

    const secondSemesterPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений"
    ];

    button.addEventListener("click", function() {
        let rows = "";
        secondSemesterPractices.forEach((topic, index) => {
            rows += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${topic}</td>
                    <td><input type="checkbox"></td>
                </tr>
            `;
        });

        table.innerHTML = `
            <tr>
                <th>Номер</th>
                <th>Тема</th>
                <th>Посещение</th>
            </tr>
            ${rows}
        `;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const showLecturesButton = document.getElementById("showLecturesButton");
    const lecturesTable = document.getElementById("lecturesTable");

    showLecturesButton.addEventListener("click", function() {
        if (lecturesTable.style.display === "none" || lecturesTable.style.display === "") {
            lecturesTable.style.display = "block";  // Меняем display на block
            setTimeout(() => {
                lecturesTable.classList.add("show"); // Добавляем класс для анимации появления
            }, 10); // Добавляем небольшую задержку для анимации
        } else {
            lecturesTable.classList.remove("show"); // Убираем класс для анимации скрытия
            setTimeout(() => {
                lecturesTable.style.display = "none";  // Скрываем таблицу после анимации
            }, 500); // Задержка на время анимации
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        // Отображаем сообщение
        message.style.display = "block"; // Делаем сообщение видимым

        // Добавляем анимацию для появления
        setTimeout(() => {
            message.classList.add("show"); // Добавляем класс для анимации появления
        }, 10); // Небольшая задержка для корректной анимации

        // Очищаем форму
        form.reset();
    });
});
