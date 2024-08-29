import {
  PLAYER_ONE_SYMBOL,
  PLAYER_TWO_SYMBOL,
  GAME_BOARD_ID,
  GAME_CELL_CLASS,
  DATA_INDEX_ATTRIBUTE,
  SCORE_X_ID,
  SCORE_O_ID,
  WIN_COMBINATION,
  MODAL_DURATION,
  PLAYER_X_ID,
  PLAYER_O_ID,
  MODAL_ID,
  MODAL_CONTENT_ID,
  TAKEN_CELL_MESSAGE,
  TIE_MESSAGE,
  HELP_MODAL_DURATION,
  GAME_RESTARTED_MESSAGE,
} from './constants.js';
import Player from './player.js';
import Board from './board.js';

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
    this.setActivePlayer();
    this.setScoreDisplay();
    this.#board.renderGameBoard();
    this.setupClickHandlers();
  }

  restartGame() {
    this.showModal(GAME_RESTARTED_MESSAGE, HELP_MODAL_DURATION);
    this.#board.resetGameBoard();
    this.#playerOne.resetScore();
    this.#playerTwo.resetScore();
    this.#currentPlayerSymbol = this.#playerOne.symbol;
    this.#activePlayerSymbol = this.#playerOne.symbol;
    this.setScoreDisplay();
    this.setActivePlayer();
  }

  setupClickHandlers() {
    const boardContainer = document.getElementById(GAME_BOARD_ID);

    boardContainer.addEventListener('click', (event) => {
      const cell = event.target.closest(GAME_CELL_CLASS);
      const index = cell.getAttribute(DATA_INDEX_ATTRIBUTE);

      if (!cell) return;

      if (this.#board.isCellTaken(index))
        return this.showModal(TAKEN_CELL_MESSAGE, HELP_MODAL_DURATION);

      this.#board.updateCell(index, this.#activePlayerSymbol);
      this.checkGameState();
    });
  }

  checkGameState() {
    const isGameWinnable = this.checkForWinner();
    const isGameTie = this.checkForTie();

    if (isGameWinnable) {
      this.showModal(`${isGameWinnable} WINS`, MODAL_DURATION);
      this.setupNextRound();
      this.updatePlayerScore(isGameWinnable);
      this.setScoreDisplay();
    } else if (isGameTie) {
      this.showModal(TIE_MESSAGE, MODAL_DURATION);
      this.setupNextRound();
    } else {
      this.switchPlayerTurn();
    }
  }

  setActivePlayer() {
    const playerXElement = document.getElementById(PLAYER_X_ID);
    const playerOElement = document.getElementById(PLAYER_O_ID);
    const isActivePlayerX = this.#activePlayerSymbol === this.#playerOne.symbol;

    playerXElement.classList.toggle('active-player', isActivePlayerX);
    playerOElement.classList.toggle('active-player', !isActivePlayerX);
  }

  switchPlayerTurn() {
    this.#activePlayerSymbol === this.#playerOne.symbol
      ? (this.#activePlayerSymbol = this.#playerTwo.symbol)
      : (this.#activePlayerSymbol = this.#playerOne.symbol);

    this.setActivePlayer();
  }

  switchCurrentPlayer() {
    this.#currentPlayerSymbol === this.#playerOne.symbol
      ? (this.#currentPlayerSymbol = this.#playerTwo.symbol)
      : (this.#currentPlayerSymbol = this.#playerOne.symbol);
  }

  checkForWinner() {
    for (let i = 0; i < WIN_COMBINATION.length; i++) {
      const [a, b, c] = WIN_COMBINATION[i];

      if (
        this.#board.cells[a] &&
        this.#board.cells[a] === this.#board.cells[b] &&
        this.#board.cells[a] === this.#board.cells[c]
      ) {
        return this.#board.cells[a];
      }
    }

    return null;
  }

  checkForTie() {
    return this.#board.cells.every((cell) => cell !== null);
  }

  updatePlayerScore(playerSymbol) {
    playerSymbol === this.#playerOne.symbol
      ? this.#playerOne.incrementScore()
      : this.#playerTwo.incrementScore();
  }

  setScoreDisplay() {
    document.getElementById(SCORE_X_ID).textContent = this.#playerOne.score;
    document.getElementById(SCORE_O_ID).textContent = this.#playerTwo.score;
  }

  showModal(message, duration) {
    const modal = document.getElementById(MODAL_ID);
    const modalContent = document.getElementById(MODAL_CONTENT_ID);

    modalContent.textContent = message;
    modal.showModal();

    setTimeout(() => {
      modal.close();
    }, duration);
  }

  setupNextRound() {
    this.#board.resetGameBoard();
    this.switchCurrentPlayer();
    this.#activePlayerSymbol = this.#currentPlayerSymbol;
    this.setActivePlayer();
  }
}
