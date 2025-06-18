# 🎮 Tic-Tac-Toe Game

<div align="center">
  <img alt="Tic-Tac-Toe Game Demo" src="assets/Tic-Tac-Toe.png" height="350" />
  <br/>
  <a href="https://tic-tac-toe-mauve-nine-55.vercel.app/" target="_blank">🎯 Play Live Demo</a>
</div>

## 📝 Description

A modern, responsive Tic-Tac-Toe game built with vanilla JavaScript using ES6 modules. Features include real-time score tracking, sound effects, visual feedback, and a clean, intuitive interface. The game supports two-player gameplay with dynamic score management and game state handling.

## ✨ Features

- **🎯 Two-Player Gameplay**: Classic X vs O gameplay with turn-based mechanics
- **📊 Score Tracking**: Persistent score tracking for both players across games
- **🔊 Sound Effects**: Audio feedback for wins, warnings, and game restarts
- **🎨 Visual Feedback**: Modal notifications for game events (win, tie, restart)
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🔄 Game Reset**: Reset both the board and scores with one click
- **⚡ Active Player Indicator**: Visual indication of whose turn it is
- **📋 Game Rules**: Built-in rules display for easy reference

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tools**: Browser-sync for development server
- **Architecture**: Modular JavaScript with ES6 modules
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/TihomirDenev/Tic-Tac-Toe.git
   cd Tic-Tac-Toe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the URL shown in your terminal)

## 🎮 How to Play

1. **Starting the Game**: The game automatically starts with Player X
2. **Making Moves**: Click on any empty cell to place your mark (X or O)
3. **Winning**: Get three of your marks in a row (horizontally, vertically, or diagonally)
4. **Scoring**: Wins are tracked automatically for both players
5. **Resetting**: Click "RESET GAME" to clear the board and scores

## 📁 Project Structure

```
Tic-Tac-Toe/
├── assets/
│   ├── sounds/          # Audio files for game feedback
│   └── favicon.png      # Game favicon
├── src/
│   ├── game-engine.js   # Main game logic and state management
│   ├── board.js         # Game board rendering and cell management
│   ├── player.js        # Player class and score handling
│   ├── sounds.js        # Audio playback functionality
│   └── constants.js     # Game constants and configuration
├── styles/
│   ├── style.css        # Main stylesheet
│   ├── board.css        # Game board styling
│   ├── modal.css        # Modal dialog styles
│   ├── score.css        # Score display styling
│   ├── rules.css        # Rules section styling
│   └── variables.css    # CSS custom properties
├── index.html           # Main HTML file
├── script.js            # Entry point
└── package.json         # Project configuration
```

## 🔧 Development

**Key Components**

- **GameEngine**: Manages game state, player turns, and win detection
- **Board**: Handles board rendering, cell updates, and game board state
- **Player**: Manages individual player data and score tracking
- **Sounds**: Provides audio feedback for game events

**_Code Architecture_**

The project uses modern JavaScript modules with a clean separation of concerns:

- **Constants**: Centralized configuration and DOM selectors
- **Modular Design**: Each component has a single responsibility
- **Event-Driven**: Uses DOM events for user interactions
- **State Management**: Centralized game state in the GameEngine class

## 🌐 Live Demo

Play the game online: [Tic-Tac-Toe Live Demo](https://tic-tac-toe-mauve-nine-55.vercel.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tihomir Denev**

- GitHub: [@TihomirDenev](https://github.com/TihomirDenev)

---

<div align="center">
  ⭐ Star this repository if you found it helpful!
</div>
