if(jQuery().fancybox){
	$(".gallery").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
};

if(jQuery().masonry){
	var grid;
	
	grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true
	});
	
	grid.imagesLoaded().progress( function() {
		grid.masonry();
	}); 
};

var fullname;
var source = document.getElementById('source');
var fakepath = document.getElementById("fakepath");

source.onchange = function () {
	fullname = this.value;
	fakepath.innerHTML = fullname;
};
