$(document).ready(function() { // jQuery-ის გამოყენება
    const userInitial = localStorage.getItem('firstLetter'); // ელ.ფოსტის პირველი ასო localStorage-დან
    const userInitialElement = $('#userInitial'); // jQuery-ის გამოყენება: ელემენტის მოძიება ID-ით 'userInitial'

    if (userInitial) {
        userInitialElement.text(userInitial); // jQuery-ის გამოყენება: ელემენტში ასოს ჩაწერა
    }
});