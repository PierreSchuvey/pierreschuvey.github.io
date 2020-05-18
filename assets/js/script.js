$(function(){
  $(".oneDiv").css('display','none');
  $('.divDescriptionFormation').css('display','none');
  $('.divDescriptionSkills').css('display','none');
//Nav qui colle en haut
  var leftOffset = parseInt($("#header").css('left')); //Grab the left position left first
  $(window).scroll(function(){
      $('#header').css({
          'left': $(this).scrollLeft() + leftOffset //Use it later
      });
  });
  var posNavparRapportTop = $('#navigationElement').offset();
  $(window).scroll(function(){
    var nbrPxScroll = $(this).scrollTop();
      if (posNavparRapportTop['top'] < nbrPxScroll) {
        $('#navigationElement').css('position','fixed');
        $('#pictureImgBorderNav').css('position','fixed');
        $('#pictureImgBorderNav').attr('src','assets/img/bordNavHover.png');
      }else {
        $('#navigationElement').css('position','static');
        $('#pictureImgBorderNav').css('position','static');
        $('#navigationElement').css('border-bottom','50px');
        $('#pictureImgBorderNav').attr('src','assets/img/bordNav.png');
      }
  });
   $('.buttonFomations').click(function(){
     var div = $(this).next('.divDescriptionFormation');
     div.animate({
       height : 'toggle'
     });
   })
   $('.buttonSkills').click(function(){
     var div = $(this).next('.divDescriptionSkills');
     div.animate({
       height : 'toggle'
     });
   })

   $(".experiences").on('click',function(){
    $('.oneDiv').fadeOut(500);
     $('#homeDiv').fadeOut(500);
    if ($('#divJobs').css("display") == "none") {
      $( "#divJobs" ).toggle( 1900, function() {
// Animation complete.
});
      }else {
        return;}
   });

   $(".formations").on('click',function(){
    $('.oneDiv').fadeOut(500);
     $('#homeDiv').fadeOut(500);
    if ($('#divFormation').css("display") == "none") {
      $( "#divFormation" ).toggle( 1900, function() {
// Animation complete.
});
      }else {
        return;}
   });

   $(".skills").on('click',function(){
    $('.oneDiv').fadeOut(500);
     $('#homeDiv').fadeOut(500);
    if ($('#divSkills').css("display") == "none") {
      $( "#divSkills" ).toggle( 1900, function() {
// Animation complete.
});
      }else {
        return;}
   });

   $(".hobbies").on('click',function(){
    $('.oneDiv').fadeOut(500);
     $('#homeDiv').fadeOut(500);
    if ($('#divHobbies').css("display") == "none") {
      $( "#divHobbies" ).toggle( 1900, function() {
   // Animation complete.
   });
      }else {
        return;}
   });
  $(document).ready(truck());
});
