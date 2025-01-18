document.addEventListener("DOMContentLoaded", function() {
    const userInitial = localStorage.getItem('firstLetter'); // ელ.ფოსტის პირველი ასო localStorage-დან
    const userInitialElement = document.getElementById('userInitial'); // ელემენტი, სადაც ასო უნდა გამოჩნდეს

    if (userInitial) {
        userInitialElement.innerText = userInitial; // ასოს ჩაწერა ელემენტში
    }

    // "Proceed to Checkout" ღილაკზე დაკლიკება
    const proceedButton = document.querySelector('.yellow'); // ღილაკის ელემენტი
    proceedButton.addEventListener('click', function(event) {
        event.preventDefault(); // ფორმის გაგზავნის შეჩერება

        // ფორმის ველები
        const country = document.querySelector('input[placeholder="Enter Country"]').value; // ქვეყანა
        const state = document.querySelector('input[placeholder="Enter State"]').value; // შტატი
        const cardName = document.querySelector('input[placeholder="Name of card"]').value; // კარტის სახელი
        const cardNumber = document.querySelector('input[placeholder="Card Number"]').value; // კარტის ნომერი
        const expiryDate = document.querySelector('input[placeholder="Enter Country"]').value; // ვადა
        const cvc = document.querySelector('input[placeholder="Enter Country"]').value; // CVC

        // ვალიდაციის შემოწმება
        if (!country || !state || !cardName || !cardNumber || !expiryDate || !cvc) {
            alert("გთხოვთ შეავსოთ ყველა ველი."); // ველების შევსებულობის შემოწმება
            return false; 
        }

        // კარტის ნომრის შემოწმება
        const cardNumberPattern = /^\d{16}$/; // 16 ციფრი
        if (!cardNumberPattern.test(cardNumber)) {
            alert("გთხოვთ შეიყვანოთ სწორი კარტის ნომერი."); // თუ კარტის ნომერი არ არის სწორი
            return false; // ფორმის გაგზავნა შეჩერდება
        }

        // სწორი მონაცემების შემთხვევაში
        window.location.href = 'order complete.html'; // შემდეგ გვერდზე გადასვლა
    });
});