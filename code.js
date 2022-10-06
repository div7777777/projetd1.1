// barre de recherche
function search_icones(){
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase();
  let x = document.getElementsByClassName('maps');
  for (i=0; i<x.length; i++){
      if (!x[i].innerHTML.toLocaleLowerCase().includes(input)){
          x[i].style.display="none";
      }
      else{
          x[i].style.display="list-item";

      }
  }
}
//   menu pied de page
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }