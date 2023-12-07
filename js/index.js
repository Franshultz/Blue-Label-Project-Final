const hamburguesa = document.querySelector(".hamburguesa");
const resp = document.querySelector(".respnavcontenedorul");

hamburguesa.addEventListener("click", () => {
    resp.classList.toggle("respnavcontenedorul_visible");
})

