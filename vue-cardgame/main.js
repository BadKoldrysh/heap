new Vue({
    name: 'cardgame',
    el: '#app',
    // we have @play from child element
    template: `<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <div class="world">
            <castle v-for="(player, index) in players" :player="player" :index="index" v-bind:key="player.name" />
            <div class="land" />
            <div class="clouds">
                <cloud v-for="index in 10" :type="(index - 1) % 5 + 1" />
            </div>
        </div>
        <transition name="hand">
            <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard" />
        </transition>
        <transition name="zoom">
            <overlay v-if="activeOverlay" :key="activeOverlay">
                <component :is="'overlay-content-' + activeOverlay"
                            :player="currentPlayer" :opponent="currentOpponent"
                            :players="players" />
            </overlay>
        </transition>
        <transition name="fade">
            <div class="overlay-background" v-if="activeOverlay" />
        </transition>
    </div>`,
    data: state,
    computed: {
        testCard() {
            return cards.fireball;
        }
    },
    methods: {
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
        testPlayCard(card) {
            // Remove the card from player hand
            const index = this.testHand.indexOf(card);
            this.testHand.splice(index, 1);
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

// Tween.js
requestAnimationFrame(animate);

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}