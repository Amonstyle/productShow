/*
  Modal cỉcle effect 
  Author: Tanh Nguyen
  Version: 1.01
  Website: http://amonweb.com;
*/

(function($) {

  $.fn.modalCircle = function(options) {


    var settings = $.extend({
      effect: "circle"
    }, options);



    this.click(function(event) {
      var $this = $(this),
          nameModal = $this.attr('data-target'),
          currentModal = $('#' + nameModal),
          thisX = $this.parent().width()/2 - 30,
          thisY = $this.parent().height()/2 - 30;

      $('body').addClass('open-modal');
      $this.addClass('to-' + settings.effect);    
      $this.css('transform', 'translate('+thisX+'px'+','+thisY+'px'+')');
      $this.find('.modal-product').fadeOut();
      

      $('body').append('<div class="'+ settings.effect +'-bg"></div');
      $this.one('otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        
        var circleX = $this.offset().left + 5,
            circleY = $this.offset().top + 5,
            circleBG = $('.' + settings.effect + '-bg');
        circleBG.css({
          'left': circleX,
          'top': circleY
        }).addClass('scaleRadius');
        currentModal.addClass('active-modal');
        
      });
      
    });

    function closeModalCircle() {
   
      $('.modal').removeClass('active-modal');
      
      setTimeout(function(){
        $('.' + settings.effect + '-bg').removeClass('scaleRadius');
      }, 150);
      setTimeout(function(){
        $('.modal-trigger').removeClass('to-' + settings.effect + '');
        $('.modal-trigger').css('transform','translate(0px,0px)');
      }, 600);
      setTimeout(function(){
        $('.' + settings.effect + '-bg').fadeOut().remove();
        $('body').removeClass('open-modal');
        $('.modal-trigger').find('.modal-product').fadeIn();
      }, 850);

    }

    $('.modal-close').click(function() {
      closeModalCircle();
    });

    $(document).keyup(function(e) {
      if (e.keyCode === 27) closeModalCircle();   // esc
    });

  }

}(jQuery));