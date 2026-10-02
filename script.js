// Мәзір
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {
    alert("Мәзірді ашу функциясы әзірленуде 🚀");
});


// Жоба батырмалары
const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.textContent = "Жоба әзірленуде... 🚀";

        setTimeout(function () {
            button.textContent = "Толығырақ →";
        }, 2000);

    });

});


// Байланыс формасы
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messageInput").value;

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "#ff6b81";

        formMessage.textContent =
            "Барлық жолды толтырыңыз!";

        return;
    }

    formMessage.style.color = "#61e6a7";

    formMessage.textContent =
        "Хабарламаңыз сәтті қабылданды! Рақмет, " + name + " 😊";

    contactForm.reset();

});