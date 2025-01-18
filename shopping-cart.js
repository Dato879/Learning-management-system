document.addEventListener("DOMContentLoaded", function() {
    const userInitial = localStorage.getItem('firstLetter'); // ელ.ფოსტის პირველი ასოს წამოღება localStorage-დან
    const userInitialElement = document.getElementById('userInitial'); // ელემენტი, სადაც ასო უნდა გამოჩნდეს

    if (userInitial) {
        userInitialElement.innerText = userInitial; // ასოს ჩაწერა ელემენტში
    }

    // Remove-ზე addEventListener-ის დაყენება
    const removeButtons = document.querySelectorAll('.cart #remove'); // ყველა "Remove" ღილაკის არჩევა
    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            // წაშლა
            const cartItem = button.closest('.cart');
            if (cartItem) {
                cartItem.remove();
            }
        });
    });
});