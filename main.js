let burger = document.querySelectorAll(".burger")[0];
let navigationBar = document.querySelectorAll(".navigation-bar")[0];

console.log("gg")

burger.addEventListener("click", ()=> {
    navigationBar.classList.toggle("active");
})