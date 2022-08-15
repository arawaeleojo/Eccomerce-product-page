let badge = document.querySelector(".badge");
let plus = document.querySelector(".increment");
let minus = document.querySelector(".decrement");
let number = document.querySelector(".number");
let icon_number = document.querySelector(".icon_number");
let cart = document.querySelector(".cart");
let card = document.querySelector(".card");
let cart_icon = document.querySelector(".cart_icon");
let empty = document.querySelector(".empty");
let full = document.querySelector(".full");
let answer = document.querySelector(".answer");
let quantity = 0;
badge.style.display = "none";


cart.addEventListener("click", () => {
    badge.style.display = "inline-block"
    badge.innerHTML = number.innerHTML;
    empty.style.display = "none";
    full.style.display = "block"
    if (quantity === 0) {
        badge.style.display = "none"

    }
})
cart_icon.addEventListener("click", () => {
    card.classList.toggle("display");
})
plus.addEventListener("click", () => {
    quantity += 1;
    number.innerHTML = quantity;
    badge.innerHTML = number.innerHTML;
    icon_number.innerHTML = quantity;
    answer.innerHTML = `$ ${quantity * 125.00}.00`
    if (quantity > 0) {
        minus.classList.remove("disabled")

    }
})
minus.addEventListener("click", () => {
    quantity -= 1;
    number.innerHTML = quantity;
    badge.innerHTML = number.innerHTML;
    icon_number.innerHTML = quantity;
    answer.innerHTML = `$ ${quantity * 125.00}.00`
    if (quantity === 0) {
        badge.style.display = "none"
        minus.classList.add("disabled");
        empty.style.display = "block";
        full.style.display = "none";
    }
})
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
