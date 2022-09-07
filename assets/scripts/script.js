let crudForm = document.querySelector(".crud");
let btnToggleForm = document.querySelector(".floatIcon")
let worldEvents = {
    
};
btnToggleForm.addEventListener("click", () => {
    if (crudForm.style.display === "flex") {
        crudForm.style.display = "none";
        btnToggleForm.querySelector("i").classList.remove("fa-solid", "fa-xmark");
        btnToggleForm.querySelector("i").classList.add("fa-sharp", "fa-solid", "fa-check");

    } else {
        btnToggleForm.querySelector("i").classList.remove("fa-sharp", "fa-solid", "fa-check");
        btnToggleForm.querySelector("i").classList.add("fa-solid", "fa-xmark");
        crudForm.style.display = "flex";
    }
})


document.getElementById("btnSend").addEventListener("click", function (event) {
    event.preventDefault()
});

//div effect display 
$(document).ready(function () {
    setTimeout(function () {
        $(".body").fadeOut(0);
    }, 80);

    setTimeout(function () {
        $(".body").fadeIn(1500);
    }, 500);
});