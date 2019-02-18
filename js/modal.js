$(document).ready(function() {

  $('.modal-trigger').click(function(event) {
    var $this = $(this),
        nameModal = $this.attr('data-target'),
        currentModal = $('#' + nameModal),
        thisX = $this.parent().width()/2 - 30,
        thisY = $this.parent().height()/2 - 30;

    $('body').addClass('open-modal');
    $this.addClass('to-circle');    
    $this.css('transform', 'translate('+thisX+'px'+','+thisY+'px'+')');
    $this.find('.modal-product').fadeOut();
    currentModal.addClass('active-modal');

    $('body').append('<div class="circle-bg"></div');
    $this.one('otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      
      var circleX = $this.offset().left + 5,
          circleY = $this.offset().top + 5,
          circleBG = $('.circle-bg');
      circleBG.css({
        'left': circleX,
        'top': circleY
      }).addClass('scaleRadius');
      
    });
    
  });

  function closeModalCircle() {
 
    $('.modal').removeClass('active-modal');
    
    setTimeout(function(){
      $('.circle-bg').removeClass('scaleRadius');
    }, 150);
    setTimeout(function(){
      $('.modal-trigger').removeClass('to-circle');
      $('.modal-trigger').css('transform','translate(0px,0px)');
    }, 600);
    setTimeout(function(){
      $('.circle-bg').fadeOut().remove();
      $('body').removeClass('open-modal');
      $('.modal-trigger').find('.modal-product').fadeIn();
    }, 850);

  }

  $('.modal-close').click(function() {
    closeModalCircle();
  });

  $(this).keyup(function(e) {
    if (e.keyCode === 27) closeModalCircle();   // esc
  });

});

