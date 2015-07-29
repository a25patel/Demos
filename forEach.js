// 1. iterate over an array of numbers, log the number

var array = [1,3,5,8,9,6,4,2,4,6,7].forEach(function(num){
  console.log(num);
})


// 2. declare var result, set to empty string, forEach strin in array. concatenate string plus comma. log
// ['a', 'b', 'c'] => 'a,b,c,'
var result = '';
['a', 'b', 'z'].forEach(function(word){
  result += word + ','
})
console.log(result);


// 3. ['a', 'b', 'c'] => 'a,b,c' !No comma after c!

var result ='';
['a', 'b', 'c'].forEach(function(letter, i , array){
  if((array.length-1) === i ){
    result += letter
  }else{
    result += letter + ','
  }
})
