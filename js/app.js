   var elBtn = document.querySelector(".site__dark-mode");
   var elBody = document.querySelector("body");

   elBtn.addEventListener("click" , function () {
      elBody.classList.toggle("light__mode")
   })