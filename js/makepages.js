// This is javascript code

// This line tells the function to run after the jquery mobile page called index has loaded
$(document).on('pageinit', '#index', function() {

	// This is a function to create a new page
	function createPage(page){
	
		var buttons="";
		var buttonCount=page.options.length;
		var i=0;
		for (i=0;i<buttonCount;i++){
			buttons=buttons+"<a href='#page"+page.options[i].id+"' data-role='button'>"+page.options[i].button+"</a>";
		}
	
		$("body").append(
			"<div data-role='page' id='page"+page.id+"'>"+
				"<div data-role='header'>"+
					"<h1>"+page.title+"</h1>"+
				"</div>"+
				"<div data-role='content'>"+
					"<p>"+page.content+"</p>"+
					buttons+
				"</div>"+
			"</div>"
		);
		
		//console.log(page.options);
		// Tells jquery mobile to apply the formatting
	}

	var storyDataLength = storyData.length;
	var i = 0;
	
	for (i=0;i<storyDataLength;i++){
		createPage(storyData[i]);
	}
	
	$("html").trigger('create');
	
});