new Vue({
    name: 'cardgame',
    el: '#app',
    template: `<div id="#app">
        Hello World!
    </div>`,
    data: state,

});

// Window resize handling
window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio();
});