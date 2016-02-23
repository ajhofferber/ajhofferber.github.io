// $('#overlay').click( function(){
//   $("#overlay").addClass("closed");
//   $("#main").fadeIn(1000)
// });
//
// $('#back').click( function(){
//   $("#overlay").addClass("open");
// })

function fillLetters(){
  $('path').css("fill", "#333399");
  $('path').css("stroke", "#000000");
  $('path').css("stroke-width", "1.5");
}

$(document).ready( function(){
    setTimeout(fillLetters, 2000);


  // $('span:hidden').fadeIn( "slow")

  $('#overlay').click( function(){
    $("#overlay").addClass("closed");
    $("#main").fadeIn(1000)
  });

  $('#back').click( function(){
    $("#overlay").addClass("open");
  })


})
