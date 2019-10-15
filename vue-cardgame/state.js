// Some usefull variables
let maxHealth = 10
let maxFood = 10
let handSize = 5
let cardUid = 0
let currentPlayingCard = null

// The consolidated state of our app
let state = {
  // World
  worldRatio: getWorldRatio(),
  turn: 1,
  players: [
    {
      name: 'Julie the Rockstar',
      food: 10,
      health: 10,
      // is skipping is next turn
      skipTurn: false,
      // skipped turn last time
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
    {
      name: 'Jacob the Funny',
      food: 10,
      health: 10,
      // is skipping is next turn
      skipTurn: false,
      // skipped turn last time
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    }
  ],
  drawPile: pile,
  discardPile: {},
  testHand: [],
  currentPlayerIndex: Math.round(Math.random()),
  // UI
  activeOverlay: null,
  get currentPlayer() {
    return state.players[state.currentPlayerIndex];
  },
  get currentOpponentId() {
    return state.currentPlayerIndex === 0 ? 1 : 0;
  },
  get currentOpponent() {
    return state.players[state.currentOpponentId];
  }
}


