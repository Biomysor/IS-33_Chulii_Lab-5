// Отримуємо елементи
const dateInput = document.getElementById("dateInput");
const datepicker = document.getElementById("datepicker");
const monthYear = document.getElementById("monthYear");
const calendar = document.querySelector(".datepicker-calendar");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const cancelButton = document.getElementById("cancelDate");

// Поточна дата
let currentDate = new Date();
let selectedDate = null;

// Функція для рендерингу календаря
function renderCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // Оновлюємо текст місяця та року
    monthYear.textContent = `${getMonthName(month)} ${year}`;

    // Очищаємо попередній календар
    calendar.innerHTML = '';

    // Дні тижня
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("span");
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });

    // Перший день місяця
    let dayOfWeek = firstDayOfMonth.getDay();
    
    // Додаємо порожні клітинки до початку місяця
    for (let i = 0; i < dayOfWeek; i++) {
        calendar.appendChild(document.createElement("span"));
    }

    // Додаємо всі дні місяця
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        const dayElement = document.createElement("span");
        dayElement.textContent = day;
        dayElement.addEventListener("click", () => selectDate(day));
        calendar.appendChild(dayElement);
    }
}

// Функція для вибору дати
function selectDate(day) {
    selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    dateInput.value = formatDate(selectedDate);
    datepicker.style.display = "none"; // Закриваємо календар
}

// Форматуємо дату для відображення
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Перехід до попереднього місяця
prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

// Перехід до наступного місяця
nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Відміна вибору дати
cancelButton.addEventListener("click", () => {
    datepicker.style.display = "none"; // Закриваємо календар
    dateInput.value = ''; // Очищаємо поле вводу
});

// Відображення календаря при натисканні на поле введення
dateInput.addEventListener("click", () => {
    datepicker.style.display = "block";
    renderCalendar(currentDate);
});

// Функція для отримання назв місяців
function getMonthName(monthIndex) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[monthIndex];
}

// Початковий рендер календаря
renderCalendar(currentDate);
