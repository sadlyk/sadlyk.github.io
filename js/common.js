$(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('.fixed-menu').addClass('fix');
      } else {
          $('.fixed-menu').removeClass('fix');
      }
      if ( $(".fixed-menu").hasClass("fix") ) {
      	$(".menu-icon-wrapper svg path").css(
        {'stroke': '#48587F'}
      );
			} else {
				$(".menu-icon-wrapper svg path").css(
        {'stroke': '#fff'}
      );
			};
			if ( $(".perspective").hasClass("modalview") ) {
				$(".menu-icon-wrapper svg path").css(
        {'stroke': '#48587F'}
      );
			};
});