var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	  height: '315',
	  width: '560',
	  videoId: 'UTAFReNq8S8'
	});
}

$(document).ready(function(){
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$("#myModal").on('show.bs.modal', function(e){
		player.playVideo();
	})

	$("#myModal").on('hide.bs.modal', function(e){
		player.stopVideo();
	})

});