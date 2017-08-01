 // Create the state that will contain the whole game
var mainState = {  
    preload: function() {  
        // Here we preload the assets
    },

    create: function() {  
        // Here we create the game
    },

    update: function() {  
        // Here we update the game 60 times per second
    },
};

// Initialize the game and start our state
var game = new Phaser.Game(500, 200);  
game.state.add('main', mainState);  
game.state.start('main');
