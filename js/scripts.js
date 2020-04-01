// Business Logic //
var translate = function(str) {
  str = str.toLowerCase();
  var sentenceArray = str.split(" ");
  outputArray = sentenceArray.map(function(word) {
  if (["a", "e", "i", "o", "u"].indexOf(word[0]) > -1) {
    return word+"way";
    } else {
      return word;
    }
  });
  return outputArray.join(" ");
}
  // oy oy oy = oyway oyway oyway
    
//For words beginning with a vowel, add "way" to the end.
// eap = eapway

// inputNew = inputNew.join("way");


// var inputNew = str.split("");

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay". help me out / elphay emay out

// User Interface Logic //
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    
    var str = $("input#str").val();
    var result = translate(str);
    if (result) {
    $(".return").text(result);
    }
    console.log(result)
  });
});
