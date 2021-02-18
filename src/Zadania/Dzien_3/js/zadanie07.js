document.addEventListener("DOMContentLoaded", function () {
   const globalX = document.querySelector("#globalX");
   const globalY = document.querySelector("#globalY");
   const localX = document.querySelector("#localX");
   const localY = document.querySelector("#localY");

   const box = document.querySelector("#box");

   box.addEventListener("mousemove", function (event) {
       globalX.innerText = event.screenX;
       globalY.innerText = event.screenY;
       localX.innerText = event.clientX;
       localY.innerText = event.clientY;
   });
});