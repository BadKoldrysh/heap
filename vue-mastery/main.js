var app = new Vue({
    el: '#app',
    data: {
        product: "SOCKS",
        description: 'a pair of warm, fuzzy socks',
        image: "./assets/vmSocks-green.jpg",
        altText: "here may be a pair of socks",
        linkText: "click here, if you can",
        linkToPast: "https://www.virgin.com/",
        isPremium: true,
        inventory: 5,
        onSale: true,
        details: ["80% cotton", "really green color", "best present for boyfriend/girlfriend"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        variants: [
            {
                variantId: 1908,
                variantName: "Black socks",
                variantImage: "./assets/vmSocks-green.jpg"
            },
            {
                variantId: 3908,
                variantName: "Red socks",
                variantImage: "./assets/vmSocks-green.jpg"
            },
            {
                variantId: 3103,
                variantName: "Blue socks",
                variantImage: "./assets/vmSocks-blue.jpg"
            },
            {
                variantId: 2023,
                variantName: "Green socks",
                variantImage: "./assets/vmSocks-green.jpg"
            },
        ],
        counter: 0,
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            this.counter--;
        },
        resetCounter() {
            this.counter = 0;
        },
        changeSocksImage(socksImage) {
            this.image = socksImage;
        }
    }
});