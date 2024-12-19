const ArrLengthValue = document.getElementById("Arr1");

// Функція для генерації випадкових чисел в діапазоні [min, max]
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для створення масиву заданої довжини
function creatArr(ArrLength){
    const array = []; // Масив для збереження значень
    for (let i = 0; i < ArrLength; i++) {
        const randomValue = random(1, 10); // Генерація випадкового числа від 1 до 10
        array.push(randomValue); // Додавання числа в масив
    }
    console.log("Array:", array);
    
    // Виведення мінімального та максимального значення
    console.log("Min:", Math.min(...array));
    console.log("Max:", Math.max(...array));

    // Виклик функції сортування
    const sortedArray = fastSort(array);
    console.log("Sorted Array:", sortedArray);
}

// Функція для швидкого сортування (QuickSort)
function fastSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
    
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    
    return [...fastSort(left), pivot, ...fastSort(right)];
}

ArrLengthValue.addEventListener('input', () => {
    const ArrLength = parseFloat(ArrLengthValue.value) || 0; // Отримуємо значення довжини масиву
    creatArr(ArrLength); // Викликаємо функцію створення масиву
});
