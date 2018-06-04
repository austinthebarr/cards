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

//////
  var suits = ["clubs", "hearts", "spades", "diamonds"];
  var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
       $(".display1").append("<li>" + rank + " of " + suit + "</li>");
    });
  });




  });
});
