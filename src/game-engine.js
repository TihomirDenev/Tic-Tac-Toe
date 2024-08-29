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
    this.setActivePlayer();
    this.setScoreDisplay();
    this.#board.renderGameBoard();
    this.setupClickHandlers();
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

  setActivePlayer() {
    const playerXElement = document.getElementById(PLAYER_X_ID);
    const playerOElement = document.getElementById(PLAYER_O_ID);
    const isActivePlayerX = this.#activePlayerSymbol === this.#playerOne.symbol;

    playerXElement.classList.toggle('active-player', isActivePlayerX);
    playerOElement.classList.toggle('active-player', !isActivePlayerX);
  }

  setScoreDisplay() {
    document.getElementById(SCORE_X_ID).textContent = this.#playerOne.score;
    document.getElementById(SCORE_O_ID).textContent = this.#playerTwo.score;
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

  switchCurrentPlayer() {
    this.#currentPlayerSymbol === this.#playerOne.symbol
      ? (this.#currentPlayerSymbol = this.#playerTwo.symbol)
      : (this.#currentPlayerSymbol = this.#playerOne.symbol);
  }

  setupNextRound() {
    this.#board.resetGameBoard();
    this.switchCurrentPlayer();
    this.#activePlayerSymbol = this.#currentPlayerSymbol;
    this.setActivePlayer();
  }

  updatePlayerScore(playerSymbol) {
    playerSymbol === this.#playerOne.symbol
      ? this.#playerOne.incrementScore()
      : this.#playerTwo.incrementScore();
  }
}
