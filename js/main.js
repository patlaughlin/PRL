$(function() {
	$(window).resize(function(event) {
		console.log($(window).width());
	});

	$('.prim-nav a').click(function(event) {
		event.preventDefault();
		// history.pushState({path: 'foobar', '', this.href});
		$.get(this.href, function(data) {
			$('.blog').html(data);
		});
	});
});
