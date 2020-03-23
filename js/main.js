// PopUp Form and thank you popup after sending message
var $popUp = $('#popup');
var $popOverlay = $(".popup-overlay");
var $popWindow = $(".popWindow");
var $subscribeWindow = $(".subscribe_window");
var $popThankYouWindow = $(".thank_you_window");
var $popClose = $(".close-btn");

$(window).load(function(){
$popUp.on('click', function(){
  $popOverlay.fadeIn();
  $subscribeWindow.fadeIn();
});
});
$(function() {
  // Close Pop-Up after clicking on the button "Close"
  $popClose.on("click", function() {
    $popOverlay.fadeOut();
    $popWindow.fadeOut();
  });

});


new WOW().init();
function slowScroll (id){
  var offset = 0 ;
  $('html, body').animate({
scrollTop: $(id).offset ().top - offset
}, 500);
return false;
}
$('.menu__btn').on('click', function(){
  $('.menu__list').slideToggle();
// $('.header__info').offset({bottom:100});
});
