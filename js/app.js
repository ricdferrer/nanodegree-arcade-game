class Character {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        // Sprite list, 
        // Check Resources.load in engine.js before add more sprites here.
        this.sprite = [];
    }
    // Update the enemy's position
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.x += this.speed * dt;

        if (this.x > 600) {
            this.x = -50;
            this.speed = 100 + Math.floor(Math.random() * 222);
        }

        if (player.x < this.x + 80 &&
            player.x + 80 > this.x &&
            player.y < this.y + 60 &&
            60 + player.y > this.y) {
            player.x = 202;
            player.y = 405;
        }
    }
    // Draw the enemy on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

// Enemies our player must avoid
class Enemy extends Character {
    // Enemy class
    constructor(x, y, speed) {
        super(x, y, speed);
        // The image/sprite for enemies sprites
        this.sprite = 'images/enemy-bug.png';

    }
}


class Player extends Character {
    // Player class
    constructor(x, y) {
        super(x,y);
        // Player sprite list 
        this.sprite = ['images/char-boy.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];
        // Random pick a sprite
        this.randomSprite = this.sprite[Math.floor(Math.random() * this.sprite.length)];

    }
    // Draw the Player on the screen
    render() {
        ctx.drawImage(Resources.get(this.randomSprite), this.x, this.y);
    }
    // a handleInput() method.
    handleInput(keyPress) {
        if (keyPress === 'left' && this.x > 0) {
            this.x -= 102;
        }
        if (keyPress === 'right' && this.x < 405) {
            this.x += 102;
        }
        if (keyPress === 'up' && this.y > 0) {
            this.y -= 83;
        }
        if (keyPress === 'down' && this.y < 405) {
            this.y += 83;
        }
        // Restart player position
        if (this.y < 0) {
            this.x = 202;
            this.y = 405;
        }
    }
}


// Enemies Array
const allEnemies = [];

// Enemies start position
const enemyLocation = [55, 140, 220];

// Enemies movement speed
const movement = {
    randomStartX: function () {
        return Math.random() * 515;
    },
    randomSpeed: function () {
        return (Math.random() * 300) + 100;
    }
};

// Enemy random start location
enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(movement.randomStartX(), locationY, movement.randomSpeed());
    allEnemies.push(enemy);
})

// Player object and start position
let player = new Player(202, 405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
