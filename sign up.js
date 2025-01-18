function validateSignUp() {
    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const username = document.querySelector('input[placeholder="Username"]').value;
    const email = document.querySelector('input[placeholder="Email ID"]').value;
    const password = document.querySelector('input[placeholder="Enter Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ელ.ფოსტის ფორმატის რეგულარული გამოხატულება

    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        alert("გთხოვთ შეიყვანოთ ყველა ველი.");
        return false; // ყველა ველის შევსებულობის შემოწმება
    }

    if (!emailPattern.test(email)) {
        alert("გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა.");
        return false; // არასწორი ელფოსტის შემოწმება
    }

    if (password !== confirmPassword) {
        alert("პაროლები არ ემთხვევა.");
        return false; // პაროლები უნდა დაემთხვეს
    }

    // თუ ყველაფერი სწორია, შეინახეთ ელ.ფოსტის პირველი ასო localStorage-ში
    const firstLetter = email.charAt(0).toUpperCase(); // პირველი ასო
    localStorage.setItem('firstLetter', firstLetter); // localStorage-ში შენახვა

    // ამოქმედება შეტყობინების div-ის
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block'; // შეტყობინების გამოჩენა
    messageDiv.innerText = "Account Created Successfully!"; // შეტყობინების ტექსტი

    // ნახევარ წამში შეტყობინების წაშლა და გადასვლა მეორე გვერდზე
    setTimeout(function() {
        messageDiv.style.display = 'none'; // შეტყობინების წაშლა
        window.location.href = 'category-page.html'; // category-page-ზე გადასვლა
    }, 500); // ნახევარი წამი
}