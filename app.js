var guessnm= 10
var ask= prompt ("Guess my favorite number")
while (ask != guessnm){
  ask= prompt("try again wrong answer!")
}
alert("you guessed it right")


// var a = 5 
// var b = 1

// function sum () {
// var c = a+b

// return c;
// }

// var result = sum ()
// console.log (result)


var stars = prompt ("rate my website ");
function star (y){
  var answer = ' '
  for ( var i = 0; i < y; i++) {
    answer = answer + "<img src= 'https://lh3.googleusercontent.com/proxy/L8-0aSRZv0-jpaOWWMrRjif5SLi3LxGZAmtopkzgyTrm7Bhnrhj7x3w8wz7EHbdPICOFDZXHi-MXWhWFQzy1bchIyJDRHJp4dR6WWk3QxjUweg'>"
  }
return answer
} 

document.write(star(stars));
