function selectMode(mode){

var color = "ghostWhite";
var image = "The-20-Best-Royalty-Free-Music-Sites-in-2018.png";
var label = "GROOVER";

if(mode === "dark"){

color = "darkSlateBlue";
image = "The-20-Best-Royalty-Free-Music-Sites-in-2018.png";
var label = "GROOVER";

}else if (mode === "light") {

color = "ghostWhite";
image = "The-20-Best-Royalty-Free-Music-Sites-in-2018.png";
var label = "GROOVER";

}else{

color = "dimGray";
image = "The-20-Best-Royalty-Free-Music-Sites-in-2018.png";
var label = "GROOVER";

}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("contactus").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;


}