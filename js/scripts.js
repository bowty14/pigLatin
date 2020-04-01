// Business Logic //
var translate = function(str) {
  str = str.toLowerCase();
  if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
    return str = str + "way";
  }
};
    

// User Interface Logic //
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var str = $("input#str").val();
    var result = translate(str);
    if (result) {
    $(".return").text(result);
    }
    console.log(str);
  });
});
