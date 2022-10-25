// stampare 100 numeri partendo da zero

let divNumero = document.getElementById('numeri')

for ( let i = 1; i <= 100; i++ ) {
    let numero = document.createElement("div");
    numero.innerHTML = i;
    numero.classList.add("numero")
    numero.classList.add("w-25")
    numero.classList.add("text-center")
    if(i%3 == 0){
        numero.innerHTML = "fizz"
        numero.classList.add("fizz")
    }
    if(i%5 == 0){
        numero.innerHTML = "buzz"
        numero.classList.add("buzz")
        
    }
    if(i%5 == 0 && i%3 == 0){
        numero.innerHTML = "fizzbuzz"
        numero.classList.add("fizzbuzz")
    }
    divNumero.appendChild(numero)
}
//  let numero = `<div class=numero>${i}</div>`;
//  if(i%3 == 0){
//     numero =  `<div class=fizz>fizz</div>`;
//  }
//  if(i%5 == 0){
//     numero =  `<div class=buzz>buzz</div>`;
//  }
//  if(i%5 == 0 && i%3 == 0){
//     numero =  `<div class=fizzbuzz>fizzbuzz</div>`;
//  }
//  divNumero.innerHTML += numero