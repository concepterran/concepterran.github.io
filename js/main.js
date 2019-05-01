// Animate Smooth Scroll
$('#view-work').on('click', function() {
	const images = $('#images').position().top;

	$('html, body').animate(
	{
		scrollTop: images
	},
	900
	);
});

$('#top').on('click', function() {
	const landing = $('#landing').position().top;

	$('html, body').animate(
	{
		scrollTop:landing
	},4000);
});