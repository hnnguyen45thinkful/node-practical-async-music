// Try It!
// Try rewriting your progress bar example from the previous exercise to use the Node.js EventEmitter class. Try registering and unregistering callbacks for each event to make sure that it is working as you expect.

//After looking at the pattern from the EventEmitter-example.js

//this is a example of media player
//var events = require('events');
//Create a player with new object and event emitter.
//var player = new events.EventEmitter();
//Starting the player with on and also sent out console.log message string.
// player.on('start', function(artist, song) {
//     console.log('Starting audio stream playing', artist, song);
// });

// player.on('stop', function() {
//     console.log('Stopping audio stream');
// });

// player.on('start', function() {
//     console.log('Updating UI to started state');
// });

// player.on('stop', function() {
//     console.log('Updating UI to stopped state');
// });
//Using the emit to call the artist and song in the console.log in the function parameters.
// player.emit('start', 'Sleater Kinney', 'No Cities to Love');
// player.emit('stop');

//New Progress Bar similar to player but now use progressBar

  var events = require("events");
  
  var progressBar = new events.EventEmitter;

  progressBar.on("progress", function(counting){
     if(counting === 0){
         console.log("starting...");
     }
  });
  progressBar.on("progress", function(counting){
     if(counting % 10 === 0){
         console.log(counting);
     }
  });
  progressBar.on("stop", function(counting){
      if(counting === 100){
          console.log("...ended");
      }
  });
  //Starting out at ZERO//.
  var counting = 0;
  //Creating a while if its at 101 its stops
  while(counting < 101){
  //Show and emit results from the progress and stop. 	
  progressBar.emit("progress", counting);
  progressBar.emit("stop", counting);
  counting++;
  }