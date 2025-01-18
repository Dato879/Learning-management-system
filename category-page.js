// ელემენტების არჩევა
const ratingHeader = document.querySelector('.rating-header');
const ratingContent = document.getElementById('rating-content');
const toggleIcon = document.getElementById('toggle-icon');
const stars = document.querySelectorAll('.stars');

// Rating-ის ფუნქცია
ratingHeader.addEventListener('click', () => {
    const isVisible = window.getComputedStyle(ratingContent).display === 'block'; // ამოწმებს, ჩანს თუ არა
    ratingContent.style.display = isVisible ? 'none' : 'block'; // თუ ჩანს, დამალავს და თუ დამალულია, გამოაჩენს
    toggleIcon.textContent = isVisible ? '﹀' : '︿'; // გამოჩენა/დამალვის ცვლილება
});

// შეფასებების შერჩევის ფუნქცია
function selectRating(rating) {
    stars.forEach(starGroup => {
        const starRating = parseInt(starGroup.getAttribute('data-rating')); // იღებს ვარსკვლავების რაოდენობას
        starGroup.classList.remove('selected'); // შლის წინათ მონიშნულს
        if (starRating === rating) { // თუ იგივე მონიშნე
            starGroup.classList.add('selected'); // ისევ ის ინიშნება
        }
    });
}

// დოკუმენტის ჩამტვირთვის შემდეგ ჩაპერების განყოფილების დასაწყისი ხილვადობის დაყენება
document.addEventListener("DOMContentLoaded", function() {
    const chaptersHeader = document.querySelector('.numberofchapters-header'); 
    const chaptersContent = document.querySelector('.numberofchapters-content');
    const toggleIconChapters = document.getElementById('toggle-icon-chapters');

    toggleIconChapters.textContent = '︿'; // ამ icon-ის გამოჩენა თავიდანვე
    chaptersContent.style.display = 'block'; // გამოჩენა თავიდანვე

    chaptersHeader.addEventListener('click', () => {
        const isVisible = window.getComputedStyle(chaptersContent).display === 'block'; // ამოწმებს, გამოჩენილია თუ არა chapters
        chaptersContent.style.display = isVisible ? 'none' : 'block'; // გამოჩენის შეცვლა
        toggleIconChapters.textContent = isVisible ? '﹀' : '︿'; // გამოჩენა/გაქრობის icon-ები
    });
});

// Seemore-ის გამოჩენა/დამალვის ფუნქცია
document.addEventListener("DOMContentLoaded", function() {
    const seeMoreHeader = document.querySelector('.seemore-text');
    const moreContent = document.querySelector('.more-content');
    const toggleIcon = seeMoreHeader.querySelector('.toggle-icon');

    seeMoreHeader.addEventListener('click', () => {
        const isVisible = window.getComputedStyle(moreContent).display === 'block'; // ამოწმებს, გამოჩენილია თუ არა seemore
        moreContent.style.display = isVisible ? 'none' : 'block'; // გამოჩენის შეცვლა
        toggleIcon.textContent = isVisible ? '﹀' : '︿'; // გამოჩენა/გაქრობის icon-ები
    });
});

// "localStorage"-დან პირველი ასოს ამოღება და ჩასმა
const firstLetter = localStorage.getItem('firstLetter'); // "localStorage"-დან პირველი ასოს მიღება
if (firstLetter) {
    document.getElementById('first-letter').textContent = firstLetter; // მიღებული ასოს ჩანაცვლება ელემენტში
}

// კურსების ელემენტებზე დაკლიკების ფუნქცია
document.addEventListener("DOMContentLoaded", function () {
    const courses = document.querySelectorAll(".kursebi"); // ყველა "kursebi" კლასის ელემენტის არჩევა

    courses.forEach(course => {
        course.addEventListener("click", () => {
            window.location.href = "shopping-cart.html"; // "shopping-cart.html"-ზე გადამისამართება
        });
    });
});
