$(function(){
  $("form#sentence").submit(function(event){
    event.preventDefault();
  var sentence = $("input#sentence").val()
  var array = sentence.split(" ")
  var newArray = []

  array.forEach(function(word){
    if (word.length >= 3) {
      newArray.push(word);
    }
  });
  
  var newArrayFinal = newArray.reverse().join(" ");
  $(".display").text(newArrayFinal);
  });
});
