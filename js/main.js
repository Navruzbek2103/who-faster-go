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
      let result1 = elInput / walk;

      elParagraphWalk.textContent = Math.trunc(result1) + " soat";


      let result2 = elInput / velo;

      elParagraphVelo.textContent = Math.trunc(result2) + " soat";


      let result3 = elInput / car;

      elParagraphCar.textContent = Math.trunc(result3) + " soat";


      let result4 = elInput / airplane;

      elParagraphAirplane.textContent = Math.trunc(result4) + " soat";


      // elParagraphVelo.textContent = (elInput / velo) + " soat";
      // elParagraphCar.textContent = (elInput / car) + " soat";
      // elParagraphAirplane.textContent = (elInput / airplane) + " soat";
    }
    else{
      alert("Iltimos, raqamli ma'lumot kiriting...")
    }
  }
  else{
    alert("Iltimos, maydonni to'ldiring")
  }

})