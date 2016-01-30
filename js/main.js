$(".nav a").on("click", function(){
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 69) {
		$('#back-top').addClass('show-totop');
		$('.navbar.navbar-default').addClass('navbar-fixed-top');
		$('body').addClass('scroll');
	}
	else {
		$('#back-top').removeClass('show-totop');
		$('.navbar.navbar-default').removeClass('navbar-fixed-top');
		$('body').removeClass('scroll');
	}
});

$('#back-top, .navbar-nav>li:nth-child(1) a').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
 });

$(function() {
	$('.navbar-default .navbar-nav>li>a').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 1000);
		return false;
		}
	}
	});
});

$('#modalFrame').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	var recipient = button.data('url') 
	var recipientT = button.data('title') 
	var modal = $(this)
	modal.find('.modal-title').text(recipientT)
	modal.find('.modal-body iframe').attr('src', recipient);
})

$('#modalVideo').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	var recipient = button.data('url') 
	var recipientT = button.data('title') 
	var modal = $(this)
	modal.find('.modal-title').text(recipientT)
	modal.find('.modal-body video').attr('src', recipient);
})

$( document ).ready(function() {
	setTimeout(function(){
		var $container = $('.isotopeHolder').isotope({
			itemSelector : '.item',
			isFitWidth: true
		});

		$(window).smartresize(function(){
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({ filter: '*' });
		$('#filters').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });
		});
	},1000);
});