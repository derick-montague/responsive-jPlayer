responsive-jPlayer
==================

A responsive audio player utilizing the open source jPlayer library (<a href="https://github.com/happyworm/jPlayer">https://github.com/happyworm/jPlayer</a>) and circle player (<a href="https://github.com/maboa/circleplayer">https://github.com/maboa/circleplayer</a>). This player has a static playlist that can be defined using XML or JSON. If you choose to use the XML file, an ajax request will be us used to get the data and format the playlist object. I added this option since it was the request from the person that asked me to create this skin.


#Set Up
1. NPM install (bower components coming soon)
2. grunt build
  * Update either the src/js/app/playlist.js or .xml file. If you are going to use the XML file, you will need to set the "useJsonPlaylist" variable to false in the **src/js/app/app.js** file and then run grunt build.
  * The default grunt task will run development tasks and set a watch, so use Chrome and the Live Reload extension for development.



  
View the live player at <a href="http://www.beyondhyper.com/jplayer/">http://www.beyondhyper.com/jplayer/</a>

Many, many thanks to <a href="https://github.com/thepag">Mark Panaghiston</a> (<a href="https://twitter.com/thepag">@thepag</a>) for such a great framework!
