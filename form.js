
const modal = document.getElementById("modal");
const btn_1 = document.getElementById("openModal1");
const btn_2 = document.getElementById("openModal2");
const btn_3 = document.getElementById("openModal3");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");


btn_1.onclick = function() {
  modal.style.display = "block";
}

btn_2.onclick = function() {
    modal.style.display = "block";
}

btn_3.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Валидация формы и обработка отправки
form.onsubmit = function(event) {
  event.preventDefault(); 

  
  if (form.checkValidity()) {
    successMessage.style.display = "block";
    
    setTimeout(() => {
      modal.style.display = "none";
      successMessage.style.display = "none"; 
      form.reset(); 
    }, 2000);
  } else {
    form.reportValidity();
  }
};
