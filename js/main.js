let elForm = document.querySelector(".form");
let elInput = document.querySelector("#distance");
let elParagraphWalk = document.querySelector(".item-text-walk");
let elParagraphVelo = document.querySelector(".item-text-velo");
let elParagraphCar = document.querySelector(".item-text-car");
let elParagraphAirplane = document.querySelector(".item-text-airplane");
let walk = 3.6;
let velo = 20.1;
let car = 70;
let airplane = 800;

// NaN   -> Not a Number



elForm.addEventListener("submit", function(hodisa){
  hodisa.preventDefault();

  if(elInput.value.length != 0){
    elInput = Number(elInput.value);
    if(!isNaN(elInput)){
      let result1 = elInput / walk; // soat
      let result11 = (result1 - Math.floor(result1)) * 60; // minut
      alert(result1)
      let result12 = (result11 - Math.floor(result11)) * 60  // sekund


      elParagraphWalk.textContent = Math.floor(result1) + " soat " + Math.floor(result11) + " minut " + Math.floor(result12) + " sekund"


      let result2 = elInput / velo; // soat
      let result21 = (result2 - Math.floor(result2)) * 60; // minut
      let result22 = (result21 - Math.floor(result21)) * 60  // sekund


      elParagraphVelo.textContent = Math.floor(result2) + " soat " + Math.floor(result21) + " minut " + Math.floor(result22) + " sekund"



      let result3 = elInput / car; // soat
      let result31 = (result3 - Math.floor(result3)) * 60; // minut
      let result32 = (result31 - Math.floor(result31)) * 60  // sekund


      elParagraphCar.textContent = Math.floor(result3) + " soat " + Math.floor(result31) + " minut " + Math.floor(result32) + " sekund"




      let result4 = elInput / airplane; // soat
      let result41 = (result4 - Math.floor(result4)) * 60; // minut
      let result42 = (result41 - Math.floor(result41)) * 60  // sekund


      elParagraphAirplane.textContent = Math.floor(result4) + " soat " + Math.floor(result41) + " minut " + Math.floor(result42) + " sekund"



    }
    else{
      alert("Iltimos, raqamli ma'lumot kiriting...")
    }
  }
  else{
    alert("Iltimos, maydonni to'ldiring")
  }

})