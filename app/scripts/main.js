// something big is going to be here.
let k = () => { foo };

function run(){
	$.material.init()
	$('#fullPage').fullpage({
		sectionsColor: ["#121212", '#fff', '#fff','rgb(249, 219, 0)'],
		navigation: true,
		slidesNavigation: true,
		controlArrows: false,
		loopHorizontal: true,
		scrollOverflow: true
	});
}

$(document).ready(() => run());
