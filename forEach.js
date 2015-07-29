// 1. iterate over an array of numbers, log the number

var array = [1,3,5,8,9,6].forEach(function(num){
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
['apples', 'bananas', 'cantaloupe'].forEach(function(letter, i , array){
  if((array.length-1) === i ){
    result += letter
  }else{
    result += letter + ','
  }
})

// 4. [{name: 'Tom', age: '34'}, {name: 'Betty', age:'21'}] => Tom 34 , Better 37

var array = [{name: 'Tom', age: '34'}, {name: 'Betty', age:'21'}];
array.forEach(function(object){
  console.log(object.name + ': ' + object.age);
})
