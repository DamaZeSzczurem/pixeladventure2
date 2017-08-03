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
        this.cursor = game.input.keyboard.createCursorKeys();
        //zmienna w której będę przechowywać dane o tym 
        //jaki przycisk jest wciśnięty
        //Umiejscowienie plejera w grze
        this.player=game.add.sprite(70,100,'player');
        //spadanie naszego plejera
        this.player.body.gravity.y= 200;
        //łączenie elementów w grupy
        this.walls = game.add.group();
        this.enemies = game.add.group();
        this.coins = game.add.group();
        //robimy poziom, tworzymy level 
        // x-oznacza ściane o-coin !-enemy
        var level = [
        'x x x x x x x x x x',
        '                   ',
        '                x x',
        'x x                ',
        '                   ',
        '         o         ',
        '                   ',
        '                   ',
        '          x x      ',
        '          x x      ',
        'x x x x x x x x x x',
        ];
        //sprawdzanie naszej tablicy, jaki jest znak?
        for (var i = 0; i < level.length; i++) {
   			 for (var j = 0; j < level[i].length; j++) {

        // Create a wall and add it to the 'walls' group
        	if (level[i][j] == 'x') {
            var wall = game.add.sprite(30+20*j, 30+20*i, 'wall');
            wall.width = 40;
            wall.height = 25;
            this.walls.add(wall);
            wall.body.immovable = true; 
        	}

        // Create a coin and add it to the 'coins' group
        	else if (level[i][j] == 'o') {
            var coin = game.add.sprite(30+20*j, 30+20*i, 'coin');
            this.coins.add(coin);
        	}

        // Create a enemy and add it to the 'enemies' group
        	else if (level[i][j] == '!') {
            var enemy = game.add.sprite(30+20*j, 30+20*i, 'enemy');
            this.enemies.add(enemy);
        	}
    }
}
},
        

    

    update: function() {  
       if (this.cursor.left.isDown){
       	  this.player.body.velocity.x= -200;
       }
       else if (this.cursor.right.isDown) {
       	  this.player.body.velocity.x= 200;
       }
       else{
       	this.player.body.velocity.x=0;
       }

       if(this.cursor.up.isDown) {
    		this.player.body.velocity.y = -250;
        }
        
        


      // Make the player and the walls collide
				game.physics.arcade.collide(this.player, this.walls);

// Call the 'takeCoin' function when the player takes a coin
				game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);

// Call the 'restart' function when the player touches the enemy
				game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);


// Function to kill a coin


// Function to restart the game

 },
takeCoin: function(player, coin) {
    coin.kill();
},
restart: function() {
    game.state.start('main');
},

};

// Initialize the game and start our state
var game = new Phaser.Game(800,300);  
game.state.add('main', mainState);  
game.state.start('main');
