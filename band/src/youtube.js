$(document).ready(function() {
	var key = 'AIzaSyBzHwbi-2lF9IX__2auHl82XmLfrRSIzu4';
	var playlistId = 'PL9L24llVnyP-_LKauUHjTMxARK7yiW-G2';
	var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';4
	
	var options = {
		part: 'snippet',
		key: key,
		maxResults: 25,
		playlistId: playlistId
	}
	loadVideos();
	function loadVideos()
	{
		$.getJSON(URL, options, function(data){
			console.log(data)
			var id = data.items[0].snippet.resourceId.videoId;
			mainVideo(id);
			resultsLoop(data);
		})
	}
	
	function mainVideo(id)
	{
		$('#video').html(`
		<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		`);
	}
	
	function resultsLoop(data)
	{
		$.each(data.items,function(i, item){
			var thumbnail = item.snippet.thumbnails.medium.url;
			var title = item.snippet.title;
			var description = item.snippet.description.substring(0,100);
			var vid = item.snippet.resourceId.videoId;
			$('main').append(`
		
		<article class = "item" data-key = "${vid}">
				<img src="${thumbnail}" alt ="" class="thumbnail">
				<div class = "details">
				<h4>${title}</h4>
				<p>${description}</p>
				</div>
			</article>
		`);
			
	});
	
}

$('main').on('click', 'article', function()
		{
			var id = $(this).attr('data-key');
			mainVideo(id);
		});
});