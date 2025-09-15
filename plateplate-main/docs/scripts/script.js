document.addEventListener("DOMContentLoaded", () => {
   console.log("document succesfully loaded, baby");
   
   document.getElementById('btnClicky').addEventListener('click', btnClicky); 
 }
);

function btnClicky () {
  console.log('in btnClicky event');
  document.getElementById('btnClicky').style.transform = 'rotate(15deg)'
  console.log('after rotation');
}


// const btnClicky = document.getElementById('btnClicky'); btnClicky.addEventListener('click', () => { // ...now do DOM stuff });

