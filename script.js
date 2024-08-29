import GameEngine from './src/game-engine.js';

document.addEventListener('DOMContentLoaded', function () {
  const game = new GameEngine();

  game.startGame();

  document.querySelector('.restart-button').addEventListener('click', () => {
    game.restartGame();
  });
});
