import GameEngine from './src/game-engine';

document.addEventListener('DOMContentLoaded', function () {
  const game = new GameEngine();

  game.startGame();

  document.querySelector('.restart-button').addEventListener('click', () => {
    game.restartGame();
  });
});
