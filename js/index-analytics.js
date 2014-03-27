(function(){

  $('#nav-links a, a.navbar-brand').click(function(event){
    ga('send', 'event', event.target.id, 'click', 'nav-buttons');
  });

})();
