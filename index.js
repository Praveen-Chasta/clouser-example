// const orangeBtn = document.getElementById("orange");
// const redBtn = document.getElementById("red");


// function clouser(color){

//    return function(){
//         document.body.style.backgroundColor = `${color}`
//    }

// }

// // orangeBtn.onclick = function(){
// //     document.body.style.backgroundColor = "orange"
// // }

// // redBtn.onclick = function(){
// //     document.body.style.backgroundColor = "red"
// // }

// orangeBtn.addEventListener("click", clouser("orange"));
// redBtn.addEventListener("click", clouser("red"))


const h1Element = document.getElementById("h1")
const array = ["Praveen", "Chasta", "Anuj", "Chasta"]
let currentIndex = 0

h1Element.addEventListener("click", () => {
   h1Element.textContent = array[currentIndex]

   currentIndex ++ 

   
})