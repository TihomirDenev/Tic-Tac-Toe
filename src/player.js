import { PLAYER_DEFAULT_SCORE } from './constants.js';

export default class Player {
  #symbol;
  #score;

  constructor(symbol) {
    this.#symbol = symbol;
    this.#score = PLAYER_DEFAULT_SCORE;
  }

  get symbol() {
    return this.#symbol;
  }

  get score() {
    return this.#score;
  }

  set score(value) {
    this.#score = value;
  }

  incrementScore() {
    this.score += 1;
  }

  resetScore() {
    this.score = PLAYER_DEFAULT_SCORE;
  }
}
