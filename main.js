 // Create the state that will contain the whole game
var mainState = {  
    preload: function() {  
        // Here we preload the assets
        game.load.image('player','assets/sprite.png');
        game.load.image('wall', 'assets/wall.png');
        game.load.image('coin', 'assets/points.png');
    	game.load.image('enemy', 'assets/sprite2.png');    
    },

    create: function() {  
		// Here we create the game
 		//Tworze tło
        game.stage.backgroundColor = '#3598db';
        //uruchamiamy fizyke gry
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //fizyka uruchamiana jest dla wszystkich obiektów
        game.world.enableBody= true;
        //Umiejscowienie plejera w grze
        this.player=game.add.sprite(70,100,'player');
        //spadanie naszego plejera
        this.player.body.gravity.y= 600;

    },

    update: function() {  
        // Here we update the game 60 times per second
    },
};

// Initialize the game and start our state
var game = new Phaser.Game(500, 200);  
game.state.add('main', mainState);  
game.state.start('main');
