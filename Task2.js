// Отримуємо елементи
const quantityValue = document.getElementById("quantity");
const pricePerDroidValue = document.getElementById("pricePerDroid");
const customerCreditsValue = document.getElementById("customerCredits");

// Функція обчислення транзакції
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalSum = quantity * pricePerDroid;
    if (customerCredits < totalSum) {
        return 'Insufficient funds!';
    } else {
        return `You ordered ${quantity} droids worth ${totalSum} credits`;
    }
}

// Обробка подій для полів вводу
document.querySelectorAll("#quantity, #pricePerDroid, #customerCredits").forEach(input => {
    input.addEventListener("input", () => {
        // Отримуємо значення з полів вводу
        const quantity = parseFloat(quantityValue.value) || 0;
        const pricePerDroid = parseFloat(pricePerDroidValue.value) || 0;
        const customerCredits = parseFloat(customerCreditsValue.value) || 0;

        // Формуємо повідомлення
        const message = makeTransaction(quantity, pricePerDroid, customerCredits);
        console.log(message);
    });
});
