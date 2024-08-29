import {
  DATA_INDEX_ATTRIBUTE,
  GAME_BOARD_ID,
  GAME_BOARD_SIZE,
  PLAYER_TWO_COLOR,
  PLAYER_TWO_SYMBOL,
} from './constants.js';

export default class Board {
  #container = document.getElementById(GAME_BOARD_ID);
  #cells;

  constructor() {
    this.#cells = Array(GAME_BOARD_SIZE).fill(null);
  }

  get cells() {
    return this.#cells;
  }

  renderGameBoard() {
    let boardHtml = '<div class="game-board">';

    this.#cells.forEach((cell, index) => {
      const singleCell = document.createElement('div');
      singleCell.classList.add('game-cell');
      singleCell.setAttribute(DATA_INDEX_ATTRIBUTE, index);

      boardHtml += singleCell.outerHTML;
    });

    boardHtml += '</div>';
    this.#container.innerHTML = boardHtml;
  }

  updateCell(index, symbol) {
    this.#cells[index] = symbol;

    const cellElement = this.#container.querySelector(
      `[${DATA_INDEX_ATTRIBUTE}="${index}"]`
    );

    cellElement.textContent = symbol || '';
    cellElement.style.color =
      symbol === PLAYER_TWO_SYMBOL ? PLAYER_TWO_COLOR : '';
  }

  resetGameBoard() {
    this.#cells.fill(null);
    this.#cells.forEach((el, index) => this.updateCell(index, null));
  }

  isCellTaken(index) {
    return this.#cells[index];
  }
}
