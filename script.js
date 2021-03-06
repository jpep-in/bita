$(document).ready(function(){
	// cache the window object
	$window = $(window);

	$('section[data-type="background"]').each(function(){
		// declare the variable to affect the defined data-type
		var $scroll = $(this);
		$(window).scroll(function() {
			// HTML5 proves useful for helping with creating JS functions!
			// also, negative value because we're scrolling upwards
			var yPos = -($window.scrollTop() / $scroll.data('speed'));
			// background position
			var coords = '50% '+ yPos + 'px';
			// move the background
			$scroll.css({ backgroundPosition: coords });    
		}); // end window scroll
	});// end section function

	// tab
	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
}); // close out script

// Function that validates email address through a regular expression.
function validateEmail(address) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	return filter.test(address);
}
