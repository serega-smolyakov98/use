$('.tabs-nav__item').on('click', function(){
	$('.tabs-nav__item').removeClass('active');
	// $(this).addClass('active');
	$('.tabs-content__item').removeClass('active');
	var tabIndex = $(this).attr('data-tab');
	$('.tabs [data-tab="' + tabIndex + '"]').addClass('active');
});