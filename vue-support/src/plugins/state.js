export default {
    install(Vue, state) {
        // every Vue component will inherit getter for state
        Object.defineProperty(Vue.prototype, '$state', {
            get: () => state,
        });
    },
}