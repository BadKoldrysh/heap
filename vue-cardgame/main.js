new Vue({
    name: 'cardgame',
    el: '#app',
    // we have @play from child element
    template: `<div id="#app" :class="cssClass">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <div class="world">
            <castle v-for="(player, index) in players" :player="player" :index="index" v-bind:key="player.name" />
            <div class="land" />
            <div class="clouds">
                <cloud v-for="index in 10" :type="(index - 1) % 5 + 1" />
            </div>
        </div>
        <transition name="hand">
            <hand :cards="currentHand" v-if="!activeOverlay" @card-play="handlePlayCard" @card-leave-end="handleCardLeaveEnd" />
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
        cssClass() {
            return {
                'can-play': this.canPlay,
            };
        },
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
        handlePlayCard(card) {
            playCard(card);
        },
        handleCardLeaveEnd() {
            applyCard();
        },
    },
    created() {
        
    },
    mounted() {
        beginGame();
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

function beginGame() {
    state.players.forEach(drawInitialHand());
}

function playCard() {
    if (state.canPlay) {
        state.canPlay = false;
        currentPlayingCard = card;

        // Remove the card from player hand
        const index = state.currentPlayer.hand.indexOf(card);
        state.currentPlayer.hand.splice(index, 1);

        // Add the card to the discard pile
        addCardToPile(state.discardPile, card.id);  
    }
}

function applyCard() {
    const card = currentPlayingCard;

    applyCardEffect(card);

    // wait a bit for the player to see what's going on
    setTimeout(() => {
        // Check if the players are dead
        state.players.forEach(checkPlayerLost);

        if (isOnePlayerDead()) {
            endGame();
        } else {
            nextTurn();
        }
    }, 700);
}

function nextTurn() {
    state.turn++;
    state.currentPlayerIndex = state.currentOpponentId;
    state.activeOverlay = 'player-turn';
}

function endGame() {

}

function newTurn() {
    state.activeOverlay = null;
    if (state.currentPlayer.skipTurn) {
        skipTurn();
    } else {
        startTurn();
    }
}

function skipTurn() {
    state.currentPlayer.skippedTurn = true;
    state.currentPlayer.skipTurn = false;
    nextTurn();
}

function startTurn() {
    state.currentPlayer.skippedTurn = false;
    // If both player already had a first turn
    if (state.turn > 2) {
        // Draw new card
        setTimeout(() => {
            state.currentPlayer.hand.push(drawCard());
            state.canPlay = true;
        }, 800);
    } else {
        state.canPlay = true;
    }
}