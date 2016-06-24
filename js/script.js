// $('#overlay').click( function(){
//   $("#overlay").addClass("closed");
//   $("#main").fadeIn(1000)
// });
//
// $('#back').click( function(){
//   $("#overlay").addClass("open");
// })

function fillLetters(){
  $('.letters').css("fill", "#333399");
  $('.letters').css("stroke", "#000000");
  $('.letters').css("stroke-width", "1.5");
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

  $(window).mouseenter(function(){
    $('body').css('background-color', 'rgb(247, 247, 247)')
    $('body').css('color', 'black')
  })
  $(window).mouseleave(function(){
    $('body').css('background-color', 'black')
    $('body').css('color', 'rgb(247, 247, 247)')
  })

})
