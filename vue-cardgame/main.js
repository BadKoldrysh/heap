new Vue({
    name: 'cardgame',
    el: '#app',
    // we have @play from child element
    template: `<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <hand :cards="testHand" />
    </div>`,
    data: state,
    computed: {
        testCard() {
            return cards.fireball;
        }
    },
    methods: {
        handlePlay() {
            console.log('You played a card!');
        },
        createTestHand() {
            const cards = [];
            // Get the possible ids
            const ids = Object.keys(cards);

            // Draw 5 cards
            for (let i = 0; i < 5; i++) {
                cards.push(this.testDrawCard());
            }
        
            return cards;
        },
        testDrawCard() {
            // Choose a card at random with the ids
            const ids = Object.keys(cards);
            const randomId = ids[Math.floor(Math.random() * ids.length)];
            // Return a new card with this destination
            return {
                // Unique id for the card
                uid: cardUid++,
                // Id of the destination
                id: randomId,
                // Definition object
                def: cards[randomId],
            };
        },
    },
    created() {
        this.testHand = this.createTestHand();
    },
});

// Window resize handling
window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio();
});