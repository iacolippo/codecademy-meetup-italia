var main = function() {
  setInterval(changeSlide, 15000);
}

var changeSlide = function()    {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      }
      
    currentSlide.fadeOut(0).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
}

$(document).ready(main);