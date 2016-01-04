
$(document).ready( function(){

  

  $('#overlay').click( function(){
    $("#overlay").css("display", "none");
  });

  $('span:hidden').fadeIn( "slow")


  $(function(){
    var $jittery = $('.jittery'),
        aText    = $jittery.text().split(''),
        letters = '';

    for(var i = 0; i < aText.length; i++){
      letters += '<span>'+aText[i]+'</span>';

    }

    $jittery.empty().append(letters);

    $.each($('span', $jittery), function(i){
      $(this).css('animation-delay', '-'+i+'70ms');
    });
  });




  $('#back').click( function(){
    $("#overlay").css("display", "block");
  })



})
