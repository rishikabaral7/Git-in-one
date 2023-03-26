// console.log("JavaScript")
// window.alert("Hello")

// let answer = window.confirm("Are you sure you want to exitx")
// console.log(answer)

// let answer = window.prompt("What is the capital of Nepal")
// if(answer ="Kathmandu")
// {
//     window.alert("you are correct")
// }

// console.log(answer)

// console.log(window.document.body)
// window.document.body.style.backgroundColor = "purple
// document.body.style.backgroundColor = "purple"

document.body.style.fontFamily = "sans-serif";

// let movies = document.getElementsByClassID("Movies")
// movies.style.backgroundColor = "Cyan"

// let movies = document.getElementsByClassName(".movieslist")
// movies.style.backgroundColor = "red"

// let movies = document.querySelector(".movieslist")
// movies.classList.add("Big-red")

// let movies1 = document.getElementsByClassName(".movieslist")
// movies1[1].style.backgroundColor = "blue"
// console.log(movies)

// document.addEventListener("click",function(){
//     window.alert("You clicked")
// })

// let button = document.querySelector('.click')
// button.addEventListener("click",function()
// {
//     window.alert("malai thichis")
// })

let button = document.querySelector(".click");
button.addEventListener("click", function () {
  //   document.body.classList.add("dark");
  document.body.classList.toggle("dark");

  if (button.textContent = "dark Mode") {
    button.textContent = "light Mode";
  } else {
    button.textContent = "dark Mode";
  }
});
