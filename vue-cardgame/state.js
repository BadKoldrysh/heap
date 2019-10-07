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
  // UI
  activeOverlay: null,
  turn: 1,
  players: [
    {
      name: 'Julie the Rockstar'
    },
    {
      name: 'Jacob the Funny'
    }
  ],
  testHand: [],
  currentPlayerIndex: Math.round(Math.random()),
}
