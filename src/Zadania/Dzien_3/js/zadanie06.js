document.addEventListener("DOMContentLoaded", function () {
   const divs = document.querySelectorAll(".box");

   const that = this;

   for (let div of divs) {
       div.addEventListener("click", function () {
           this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

           console.log(that);
           console.log(this);
       })
   }
});