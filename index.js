const orangeBtn = document.getElementById("orange");
const redBtn = document.getElementById("red");


function clouser(color){

   return function(){
        document.body.style.backgroundColor = `${color}`
   }

}

// orangeBtn.onclick = function(){
//     document.body.style.backgroundColor = "orange"
// }

// redBtn.onclick = function(){
//     document.body.style.backgroundColor = "red"
// }

orangeBtn.addEventListener("click", clouser("orange"));
redBtn.addEventListener("click", clouser("red"))