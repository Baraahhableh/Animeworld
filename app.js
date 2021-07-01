alert("welcome to my website")
var favoriteAnime=prompt("what is your favorite anime?")
alert("cool!")

if(favoriteAnime =="attack on titan") {
  alert ("amazing!")
}
else if (favoriteAnime != null){
  document.write("<h2>"+ favoriteAnime  + "</h2>")
}
else{
  alert("you did not write anything")
}