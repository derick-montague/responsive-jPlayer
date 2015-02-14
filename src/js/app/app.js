(function() {
	var testPlaylist = myplaylist;
	
	
/*
	$.ajax({
        type: "GET",
		url: "../dist/scripts/playlist/playlist.xml",
		dataType: "xml",
		success: function(result) {
			$(result).find('track').each(function(){
				var self = $(this),
					 mytitle = self.find('title').text(),
					 myartist = self.find('artist').text(),
					 mymp3 = self.find('mp3').text(),
					 myduration = self.find('duration').text(),
					 playlist = JSON.stringify({ title: mytitle, artist : myartist, mp3 : mymp3, duration : myduration }),// Convert the XML nodes into JSON formatted strings
					 playlistObject = $.parseJSON(playlist); // Convert the JSON formatted strings into JSON objects and add to playlist
				console.log(playlistObject);
				myPlaylist.add(playlistObject);
			});
		}
	});

*/

	 // WhiteNoise Player instance
		whiteNoise = new CirclePlayer("#white-noise-player", {}, {
			cssSelectorAncestor: "#cp_container"
		}),
	
		// WhiteNoise Playlist instance
		myPlaylist = new jPlayerPlaylist({
			jPlayer: "#white-noise-player",
			cssSelectorAncestor: "#cp_container",
		}, [ 
				// Playlist is created when the page loads
			], 
		{
			playlistOptions: {
			  autoPlay: false, // self explanatory
			  loopOnPrevious: true, //  If loop is active, the playlist will loop back to the end when executing previous()
			  shuffleOnLoop: true, //  If loop and shuffle are active, the playlist will shuffle when executing next() on the last item
			  enableRemoveControls: false, // Adds an x that allows user to remove songs from playlist
			  displayTime: 0, // how fast the playlist transitions on page load
			  addTime: 'fast', // transition time when adding a song
			  removeTime: 'fast', // transition time when removing a song
			  shuffleTime: 'slow' // transition time when shuffling playlist
			},
			swfPath: "../../scripts",
			supplied: "mp3", // add the file format extension you will be streaming
			wmode: "window"
	
		}).setPlaylist(testPlaylist);
		//});
	}());