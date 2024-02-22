// va scritta prima
const containerX = document.getElementById('container-x');

for(let i = 1; i <= 100; i++){
  
  // va per prima perchè è più specifica
  if(i % 3 === 0 && i % 5 === 0){
    containerX.innerHTML += `<div class="box color_one">FizzBuzz</div>`;
    console.log('FizzBuzz');
  }else if (i % 5 === 0){
    containerX.innerHTML += `<div class="box color_three">Buzz</div>`;
    console.log('Buzz');
  }else if(i % 3 === 0){
    containerX.innerHTML += `<div class="box color_two">Fizz</div>`;
    console.log('Fizz');
  }else{
    containerX.innerHTML += `<div class="box">${i}</div>`;
    console.log(i);
  }
}

