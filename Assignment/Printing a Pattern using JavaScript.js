//JavaScript program to print a pattern

function printPatt(range) {
  for(var i=0;i<range;i++){
    var str="";
    for(var j=0;j<i;j++){
      str += j+" ";
    }
    console.log(str);
  }
}
printPatt(25);