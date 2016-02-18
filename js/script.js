
function doIt() {
  var $jittery = $('.jittery'),
      aText    = $jittery.text().split(''),
      letters = '';
  for(var i = 0; i < aText.length; i++){
    letters += '<span class="jittery">'+aText[i]+'</span>';
  }
  $jittery.empty().append(letters);

  // $.each($('span', $jittery), function(i){
  //   $(this).css('animation-delay', '-'+i+'70ms');
  // });
};

$('#overlay').click( function(){
  $("#overlay").addClass("closed");
  $("#main").fadeIn(1000)
});


$('#back').click( function(){
  $("#overlay").addClass("open");
})

function fillLetters(){
  $('path').css("fill", "#333399");
  $('path').css("stroke", "#000000");
  $('path').css("stroke-width", "1.5");
}

$(document).ready( function(){
    doIt();
    setTimeout(fillLetters, 2000);


  $('span:hidden').fadeIn( "slow")

  $('#overlay').click( function(){
    $("#overlay").addClass("closed");
    $("#main").fadeIn(1000)
  });





})
