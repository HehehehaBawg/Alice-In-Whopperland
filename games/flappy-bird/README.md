# Live Demo [Here](https://martingithuber.github.io/JS-Flappy-Bird)
# JS-Flappy-Bird
An implementation of Flappy Bird in Javascript

# How to use
The `Game` class is located in `js/game.js`. It is the main class of the game. To create a new game, first create a new instance of `Game`, and optionally providing an `CanvasRenderingContext2D` instance, for example:
```js
const ctx = document.getElementById('canvas').getContext('2d');
const game = new Game(ctx);
```
If you don't provide a `CanvasRenderingContext2D` instance in the constructor, the game will create a new canvas and use that canvas's context instead. Then call the `start()` method. ***Note: `Game#start()` is async(for image loading purposes)***

# Configuration
Every `Game` instance has a `config` property. It is an object that contains every hardcoded value that the game uses. You can change them by modifying the `config` object of the `Game` instance. Look at the [config.js](js/config.js) file for more information.

# Example
The [main.js](js/main.js) file is an example of how to use this library. Make sure that when you include your main script in your HTML file, you don't include all the other scripts in the library, and add the `type="module"` attribute to the script tag of the file([index.html](index.html) is an example of that).

***PS: This project was intended for use with Neural Evolution algorithms, so that why the score gets big so quickly***