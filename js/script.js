for(let i = 1; i <= 100; i++){
  console.log(i);
  // va per prima perchè è più specifica
  if(i % 3 === 0 && i % 5 === 0){
    console.log('ciao');
  }else if (i % 5 === 0){
    console.log('Buzz');
  }else if(i % 3 === 0){
    console.log('Fizz');
  }
}