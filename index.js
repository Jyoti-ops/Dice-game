var randomNumber1=Math.random()*6;
var randomNumber2=Math.random()*6;
randomNumber1=Math.floor(randomNumber1+1);
randomNumber2=Math.floor(randomNumber2+1);
var r="dice"+randomNumber1+".png";
var r1="images/"+r;
document.querySelector(".img1").setAttribute("src",r1);
var r3="dice"+randomNumber2+".png";
var r2="images/"+r3;
document.querySelector(".img2").setAttribute("src",r2);
if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
    
  else if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
else
document.querySelector("h1").innerHTML="Draw!";