// var array =
// [
//   [
//     ['1','2','3'],
//     ['1','2','3'],
//     ['1','2','3']
//   ],
//   [
//     ['a','b','c'],
//     ['a','b','c'],
//     ['a','b','c']
//   ],
//   [
//     ['!','#','$'],
//     ['!','#','$'],
//     ['!','#','$']
//   ]
// ]
//
// // make array [[1,1,1], [2,2,2]]
// function threeD(array){
//   var finalArray = [];
//   for (var i =0; i<array.length; i++){
//     var array1= [];
//     for(var j =0; j<array.length; j++){
//       var array2=[];
//       for(var k=0; k<array.length; k++){
//
//       }
//     }
//   }
//
// };
// threeD(array);
// var array4 =
// [
//   [
//     [ ['1','2','3'],['1','2','3'],['1','2','3'] ],
//     [ ['a','b','c'],['a','b','c'],['a','b','c'] ],
//     [ ['!','#','$'],['!','#','$'],['!','#','$'] ]
//   ],
//   [
//     [ ['4','5','6'],['4','5','6'],['4','5','6'] ],
//     [ ['d','e','f'],['d','e','f'],['d','e','f'] ],
//     [ ['%','&','*'],['%','&','*'],['%','&','*'] ]
//   ]
// ]
// // make arrays 1. [a,a,a,] 2.[1,a,!] 3. [[123,123,123],[abc,abc,abc],[!#$,!#$,!#$]] 4. [123,abc,!#$]
// function fourD(array){
//   finalArray = [];
//   for (i=0; i<=array.length; i++){
//     var array1 = [];
//     for (j=0; j<=array.length; j++){
//       // var array2 = [];
//       // for (k=0; k<array.length; k++){
//       //
//       // }
//     }
//   }
// };
//
// fourD(array);


// Create a new 2d array rearranging the 2d array I have
var abc = [['a','b','c'],['a','b','c'],['a','b','c']];

function transpose(abc) {
var final = [];
  for(var i=0; i<abc.length;i++){
    var letter = [];
    for (var j=0; j<abc.length; j++){
      letter.push(abc[j][i]);
    }
    final.push(letter);
  }
  console.log(final);
};

transpose(abc);

// // take an query string and make into an array
// function queryString(){
//
//   var object = {};
//   var query = "http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA&name=martha";
//   var queryreplace = query.replace('http://www.yelp.com/search?', '').split('&');
//   for (i = 0; i< queryreplace.length; i++){
//     var queryEqual = queryreplace[i].split('=');
//     object[queryEqual[0]] = queryEqual[1];
//   }
//   console.log(object);
// };
//
//
// queryString();
//
// //var v = s.indexOf('whatever looking for in variable s');
// // will return number in the string when object is found
// //var r = v.slice(#);
// // will split at the number of the index

// function pad (string, num, char, direction){
//   var result = '';
//   for (var i=0; i<num ; i++){
//     result += char ;
//   }
//   if (direction === "left"){
//     console.log (result + string);
//   } else {
//     console.log(string + result);
//   }
// };
//
// pad('hello', 4, '!', "right");
//
// // My code
// function rightpad(string, num, char){
//   for(var i =0; i< num; i++){
//
//     string = string + char;
//   }
//   console.log(string);
// };
//
// rightpad('hello', 3, '!');
//
// // working copy
// function leftpad (string, num, char){
//   var charString = ""; //accumulator
//   for (var i = 0; i< num; i++){
//     charString += char;
//   }
//   var output = charString + string;
//   console.log(output);
// };
//
// leftpad("hello", 3, "!");
//
// // Working copy 2
// function leftpad (string, num, char){
//   for (var i = 0; i< num; i++){
//     string = char + string
//    }
//   return string;
// };
//
// //Working Copy 3
// function leftpad (string, num, char){
//   var i = 0;
//   while(i<num) {
//     string = char + str;
//     i++ ;
//   }
//   return string
// };
