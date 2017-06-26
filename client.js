console.log(' js sourced');

var i = 0;

$(document).ready(function(){
buttonGenerate();
buttonSwap();
buttonDelete();
});

//Step 2 Using jQuery, append a <div> element when you click the button.
function buttonGenerate (){
  $('.buttonGenerate').on('click', function(){
    $('.buttonDivs').append('<div></div>');
  // Step 3 Inside the <div> element you created in the previous step, create
  //a <p> element that shows how many times you have clicked the button from the first step.
  $('.buttonDivs').children().last().append('<p>' + (i+=1) + '</p>')
  // Step 4 Inside the <div> element you created in step two, append two <button> elements.
  // The text of the two buttons should read "Swap" and "Delete".
  .append('<button class="swapButton">Swap</button>' + '<button class="deleteButton">Delete</button>');
});
}

//Step 6 Clicking a "Swap" <button> should change its parent background-color from Red to Yellow.
function buttonSwap (){
$('.swapButton').on('click', function(){

  //can't get button to log therefore nothing is working on these!
  console.log('swap');
  $('.swapButton').parent('<div></div>').css('background-color', 'yellow');

});
}

//Step 7 Clicking a "Delete" <button> should remove its parent <div> container (and all of its contents).
function buttonDelete (){
  $('.deleteButton').click(function(){
    //can't get button to log therefore nothing is working on these!
    console.log('swap');
    $('.deleteButton').parent().remove();
});
}
