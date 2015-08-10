// Every (boolean)

//true if # > 10 else false





var object = {
  numbers: [13,6,8,14,18,12,19,4,5],

  big: function(){
    var big = true;
    this.numbers.forEach(function(input){
      if(input <=  10){
        big = false
      }
    })
    return big
  },

  map: function(){
    var big = true ;
    this.numbers.map(function(input){
      if(input <= 10){
        big = false
      }else {
        big = true
      }
      return big
    })
  }
}

console.log(object.big());
console.log(object.map());
object.numbers = [2,15,6,18,2,10,19,16,5,8,9,3,12]
console.log(object.big());
