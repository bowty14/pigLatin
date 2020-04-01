// Business Logic //
var translate = function(str) {
  str = str.toLowerCase().split("");
  if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
    return str = str + "way";
  } // else {
  //   for (var i=0; i<str.length; i++) {
  //     if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1) {
  //       var firstcons = str.slice(0, i);
  //       var middle = str.slice(i,str.length);
  //       str = middle+firstcons+"ay";
  //       break;
  //     }
  //     return str;
  //   }
};
    

// var inputNew = str.split("");

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay". help me out / elphay emay out

// User Interface Logic //
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var str = $("input#str").val();
    // var inputNew = str.split("");

    
    var result = translate(str);
    if (result) {
    $(".return").text(result);
    }
    // console.log(result);
  });
});
