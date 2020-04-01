
  var str = $("input#str").val();
  console.log(str);
  

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    if(("input#str").val(letterNumber)) {
      console.log(letterNumber);
      return true;
    } else {
  alert("not a word or phrase")
  return false;
  }
  });
});