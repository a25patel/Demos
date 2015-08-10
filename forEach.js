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

// Extra Practice for-loops to forEach

//1. Filter (array with fewer items )
var array = [13,6,8,14,18,12,19,4,5]
var object = {
  array: [13,6,8,14,18,12,19,4,5],

}

  //A. for loop - filter #> 10
    function forFilter(array){
      var result = [];
      for (var i = 0; i < array.length; i++) {
        if(array[i]> 10 ){
          result.push(array[i])
        }
      }
      return(result);
    }

  console.log(forFilter(array));


  //B. forEach
    function filter(){
      var result = [];
      array.forEach(function(input){
        if(input > 10 ){
          result.push(input)
        }
      })
      return(result)
    }

    console.log(filter(array));

  //C.  This.
    //1. this.array.forEach(function(otherFunction, this))
    //2. this.array.forEach(function(input){}.bind(this))
    var object = {
      array: [13,6,8,14,18,12,19,4,5],      //state - properties
      min: 10,
      greaterThan10: function(){
        var result = [];
        this.array.forEach(function(input){    //behavior - functions
          if(input > this.min ){
            result.push(input)
          }
        }, this)
        return result
      }
    }
    console.log(object.greaterThan10());

  //D.  map()
    var filter = array.filter(function(input){
      if(input>10){
        return input
      }
    })
    console.log(filter);
