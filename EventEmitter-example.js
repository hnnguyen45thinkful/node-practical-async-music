//Created and edited by Hieu Nguyen
//Here is the link to the event example on the node.js website
//https://nodejs.org/api/events.html

//this is a example of media player
var events = require('events');
//Create a player with new object and event emitter.
var player = new events.EventEmitter();
//Starting the player with on and also sent out console.log message string.
player.on('start', function(artist, song) {
    console.log('Starting audio stream playing', artist, song);
});

player.on('stop', function() {
    console.log('Stopping audio stream');
});

player.on('start', function() {
    console.log('Updating UI to started state');
});

player.on('stop', function() {
    console.log('Updating UI to stopped state');
});
//Using the emit to call the artist and song in the console.log in the function parameters.
player.emit('start', 'Sleater Kinney', 'No Cities to Love');
player.emit('stop');