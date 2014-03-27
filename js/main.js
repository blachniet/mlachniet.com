$('#nav-links a').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 550);
      return false;
    }
  }
});

$('a.navbar-brand').click(function(event){
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 550, "linear", function(){
    // Remove the active nav
    $('#nav-links li.active').removeClass('active');
  });
});

$('.carousel').carousel();
