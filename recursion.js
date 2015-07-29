function fizzbuzz(number){
  if(number === 0){
    console.log('Stop');
  } else if(number%5 === 0 && number%3 === 0){
    console.log(number + 'fizzbuzz');
    number --;
    fizzbuzz(number);
  }else if(number%3 === 0){
    console.log(number + 'fizz');
    number --;
    fizzbuzz(number);

  }else if(number%5 === 0){
    console.log(number + 'buzz');
    number --;
    fizzbuzz(number);
  }else {
    console.log(number);
    number --;
    fizzbuzz(number);
  }
}

// fizzbuzz(100);

function printNumber(number){
  if(number === 0 || number === 101){
    console.log("stop");
  }else{
    console.log(number)
    number -= 1;
    printNumber(number);
  }
}

// printNumber(100);

function sum(array){
  if(array.length === 1){
    console.log(array[0]);
    console.log("stop");
  }else {
    array[0] += array[1];
    array.splice(1,1);
    sum(array);
  }
}

// var numbers = [4,2,6,89,4,21,6,8,0,3,5,8,7]
// sum(numbers);

function fib(current, previous, limit){
  if(current < limit){
    console.log(current);
    fib(current + previous, current, limit);
  }else{
    console.log("stop");
  }
}

// fib(1,0,100);

// Write Up
//
// 1.  Usefulness - it's useful using recursion because instead of using tons of loops
// we can just call the function over and over just by changing the arguements within
// the arguement.
//
// 2. limitations - ?
//
// 3. Delay timers, execute a function multiple times after a set period of time. Search algorithms -
// searching through an array of items. 
// 4. stack overflow - ?
//
// 5. relevance to recursive problem - ?
