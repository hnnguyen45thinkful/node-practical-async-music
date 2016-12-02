//Created and edited by Hieu Nguyen
//This is creating the music player function
var musicPlayer = function(){
    //it has a listeners object
    this.listeners = {};
}
//Turn on the prototype that takes eventName and listener as arguments with if statements
musicPlayer.prototype.on = function(eventName, listener){
    //starts with the if listeners does not have a property of the eventName type
    if(!this.listeners.hasOwnProperty(eventName)){
        //make eventname a property of listeners and listener the value of that property
        this.listeners[eventName]= [listener];
    }
    else {
        this.listeners[eventName].push(listener);
    }
};

musicPlayer.prototype.emit = function(eventName){
    if(!this.listeners.hasOwnProperty(eventName)){
        return;
    }
    var args = [];
    //use .emit's arguments object to create an array of arguments we will pass on 
    //to our events. So essentially our musicplayer method will have a constant array of events as arguments 
    //that can be used to perform certain tasks
    for (var i = 1; i<arguments.length;i++){
        args.push(arguments[i]);
    }
    //for each eventname in this.listeners
    this.listeners[eventName].forEach(function(listener){
        //By applying arguements to them with null value and arguements
        listener.apply(null, args);
    });
};
var player = new musicPlayer();
//This uses the start listener to log artist and song first
player.on('start', function(artist, song){
    console.log('start playing', artist, song);
});
//This uses stop listener to tell music player to stop playing music
player.on('stop', function(){
    console.log("stopping audio stream");
});
//This uses on again to notify UI of starting music app
player.on('start', function(){
    console.log('Updating UI to started state');
});
//This uses the stop listener to tell music player to change UI to stopped state
player.on('stop', function(){
    console.log('Updating UI to stopped state');
})
//This is using emit to help commence our start listeners
player.emit('start', 'Sleater Kinney', 'No Cities to Love');
player.emit('stop');