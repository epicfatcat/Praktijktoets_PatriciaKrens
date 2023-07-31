$(document).ready(function(){
	$.getScript("motivatie/src/App.js", function(data, textStatus, xhr) {
		console.log(data);
		console.log(textStatus);
		console.log(xhr);
	});
});