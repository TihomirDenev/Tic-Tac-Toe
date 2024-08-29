import Board from './board';
import Player from './player';

export default class GameEngine {
  #board;
  #playerOne;
  #playerTwo;
  #currentPlayerSymbol;
  #activePlayerSymbol;

  constructor() {
    this.#board = new Board();
    this.#playerOne = new Player(PLAYER_ONE_SYMBOL);
    this.#playerTwo = new Player(PLAYER_TWO_SYMBOL);
    this.#currentPlayerSymbol = this.#playerOne.symbol;
    this.#activePlayerSymbol = this.#playerOne.symbol;
  }

  startGame() {
    this.#board.renderGameBoard();
  }
}
