// Отримуємо елементи
const countrySelect = document.getElementById('country');
const priceInput = document.getElementById('price');

// Функція для формування повідомлення
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee; // Обчислення загальної вартості
    return `Доставка до ${country} буде коштувати ${totalPrice.toFixed(2)} доларів`;
}

// Обробка події вводу і виведення повідомлення
priceInput.addEventListener('input', () => {
    const price = parseFloat(priceInput.value) || 0; // Отримуємо значення ціни
    const deliveryFee = parseFloat(price * 0.01); // Розраховуємо вартість доставки (1% від ціни)
    const country = countrySelect.value; // Отримуємо країну

    // Формуємо і виводимо повідомлення
    const message = getShippingMessage(country, price, deliveryFee);
    console.log(message);
});

