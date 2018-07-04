# A simple JavaScript arcade game.

Details of the project can be found in this guide.

The game engine and graphics were supplied by Udacity. Game logic were developed by me.

## Dependencies

- A basic keyboard to move your player character.
- A web browser that supports HTML5 to play this game.

## Project contents

- Project content files:
	- index.html - load this file in a web browser to play the game
	- js/app.js - main JS file that instantiates the enemy and player objects
	- js/engine.js - contains the main game loop and manages game rendering
	- js/resources.js - handles the loading and caching of graphics
	- images/ - directory containing game graphics
	- css/style.css - style sheet for the web page holding the game

## How to Run the Project

If you want to test the game locally and have Python installed, do the following in the directory where index.html is:

`python -m SimpleHTTPServer`
Then navigate you browser to 0.0.0.0:8000 to test the game.

Also you can install [MAMP](https://www.mamp.info/en/). That installs a local server environment on your computer. (How to use this application is not described in this document.)


## How to Play

The goal of this game is to get to the river without enemies hitting you.

To move around use the following keys :
 **←** Left
 **→** Right
 **↑** Up
 **↓** Down
 
