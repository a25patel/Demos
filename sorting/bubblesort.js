var randomArray = [];
var nearlyArray = [];
var reverseArray = [];
var fewArray = [];
var arrayLength = 10;

function generate(){
  for(var i =0; i<arrayLength; i++){
    var number = Math.floor(Math.random() * 100);
    randomArray.push(number);
  }
  console.log(randomArray); 
};
