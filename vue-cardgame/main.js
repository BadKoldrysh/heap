new Vue({
    name: 'cardgame',
    el: '#app',
    // we have @play from child element
    template: `<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <card :def="testCard" @play="handlePlay"  />
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
    },

});

// Window resize handling
window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio();
});