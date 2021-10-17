 const hamburger = document.querySelector(".hamburger");
 const close = document.querySelector(".close");
 const navUL = document.querySelector(".nav-ul");

 hamburger.addEventListener("click", () => {
     navUL.classList.toggle("show");
     hamburger.classList.toggle("hide");
 });

 close.addEventListener("click", () => {
     navUL.classList.toggle("show");
     hamburger.classList.toggle("hide");
 });

 const modal = document.querySelector(".modal");
 const btn = document.querySelector(".search");
 const closeModal = document.querySelector(".close-modal");

 btn.addEventListener("click", openPopup);
 closeModal.addEventListener("click", closePopup);

 function openPopup() {
     modal.style.display = "block";
 }

 function closePopup() {
     modal.style.display = "none";
 }