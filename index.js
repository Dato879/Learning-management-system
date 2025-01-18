function validateForm() {
    // ელ.ფოსტის და პაროლის მნიშვნელობები
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // რეგულარული გამოხატულება, რომ შევამოწმოთ ელ.ფოსტის ფორმატი
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // შეცდომების ტექსტების ობიექტი
    const errorMessages = {
        emptyFields: "გთხოვთ შეიყვანოთ მონაცემები.", // თუ რომელიმე ველი ცარიელია
        invalidEmail: "გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა." // თუ ელ.ფოსტის ფორმატი არასწორია
    };

    // მომხმარებლის მონაცემები ობიექტში
    const userData = {
        email: email,
        password: password
    };

    // ყველა ველის შემოწმება, რომ შევსებული იყოს
    const fields = [userData.email, userData.password];
    const allFilled = fields.every(field => field.trim() !== ''); // ყველა ველი უნდა იყოს შევსებული

    // თუ რომელიმე ველი ცარიელია, გამოჩნდება შეტყობინება
    if (!allFilled) {
        alert(errorMessages.emptyFields);
        return false; // ველი არ არის შევსებული, ფორმა არ გაიგზავნება
    }

    // ელ.ფოსტის ფორმატის შემოწმება
    if (!emailPattern.test(userData.email)) {
        alert(errorMessages.invalidEmail);
        return false; // ფორმატი არასწორია, ფორმა არ გაიგზავნება
    }

    // თუ ყველაფერი სწორია, პირველი ასოს შენახვა localStorage-ში
    const firstLetter = userData.email.charAt(0).toUpperCase(); // პირველი ასო ელ.ფოსტიდან
    localStorage.setItem('firstLetter', firstLetter); // ამ პირველი ასოს შენახვა localStorage-ში

    // შეტყობინების div-ის გამორთვა და გამოჩენა
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block'; // შეტყობინების გამოჩენა
    messageDiv.innerText = "Login Successful!"; // შეტყობინების ტექსტი

    // ნახევარ წამში შეტყობინების დამალვა და გადაყვანა სხვა გვერდზე
    setTimeout(function() {
        messageDiv.style.display = 'none'; // შეტყობინების დამალვა
        window.location.href = 'category-page.html'; // გადაყვანა მეორე გვერდზე
    }, 500); // 500 მილი წამის შემდეგ
}
// JSON 
const imageData = {
    "images": {
        "facebook": "img/facebook.png",
        "google": "img/google.png",
        "microsoft": "img/microsoft.png",
        "gogo": "img/gogo.png"
    }
};

// ფუნქცია, რომელიც დაამატებს გამოსახულებებს HTML-ში
function loadImages() {
    // ID-ებით წვდომა
    document.getElementById('facebook').src = imageData.images.facebook;
    document.getElementById('google').src = imageData.images.google;
    document.getElementById('microsoft').src = imageData.images.microsoft;
    document.getElementById('gogo').src = imageData.images.gogo;
}

// ბრაუზერში ფოტოების გამოჩენა
window.onload = loadImages;
