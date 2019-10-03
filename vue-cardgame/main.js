new Vue({
    name: 'cardgame',
    el: '#app',
    template: `<div id="#app">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
    </div>`,
    data: state,

});

// Window resize handling
window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio();
});