
function makeArray(firstArray, secondArray, maxLength) {
    // Створюємо новий масив, об'єднуючи два вхідних
    const combinedArray = firstArray.concat(secondArray);

    // Перевіряємо, чи перевищує довжина maxLength
    if (combinedArray.length > maxLength) {
        // Повертаємо обрізаний масив
        return combinedArray.slice(0, maxLength);
    }

    // Повертаємо весь масив, якщо він не перевищує maxLength
    return combinedArray;
}

document.getElementById('arrayTask3').addEventListener('click', function() {
    // Приклад виклику функції
    console.log(makeArray([1, 2, 3], [4, 5, 6], 5)); // [1, 2, 3, 4, 5]
    console.log(makeArray([1, 2], [3, 4, 5], 10));  // [1, 2, 3, 4, 5]
    console.log(makeArray([1, 2, 3], [4, 5, 6], 2)); // [1, 2]
});