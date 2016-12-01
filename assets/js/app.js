$( document ).ready(function() {

    // main menu toggle
    $('.menu__trigger').on('click', function() {
      $('.menu__main').slideToggle( 400 );
    });


    // show locations popup on click
    $('.locations__popup').on('click', function(e) {
      e.preventDefault();
      $('.locations').fadeIn( 200 );
      $('.overlay').show();
    });


    // close the popup on overlay click
    $('.overlay').on('click', function() {
      $('.locations').fadeOut( 200 );
      $('.overlay').hide();
    });

    // Open the appropriate submenu
    $('.menu__icon p').on('click', function() {
      var menuID = $(this).attr('data-tab');
      $('.submenu').hide();
      $('#' + menuID).slideDown( 200 );
    });

    // Hide submenu when clicking on the body
    $(document).on('click', function (e) {
        if ($(e.target).closest('nav').length === 0) {
            $('.submenu').slideUp( 200 );
        }
    });

});
