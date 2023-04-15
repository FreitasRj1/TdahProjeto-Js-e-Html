var slideIndex = [1,1];
var slideId = ["mySlides1"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";
}

// volar ao topo
var scrollTop = function() {
    window.scrollTo(0, 0);}

// scrollar para div
function scrollToDiv() {
    var div = document.getElementsByClassName("space");
    window.scrollTo({
      top: div.offsetTop,
      behavior: "smooth"
    });
  }

  // usar nome do usuário
window.onload = function() {
  var userName = prompt("Por favor, digite seu nome:");
  if (userName) { 
    document.getElementById("bemVindo").innerHTML = "Seja bem vindo, " + userName + "!"; 
    console.log("O nome do usuário é " + userName)
  }
}