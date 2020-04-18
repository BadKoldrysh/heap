var app = new Vue({
    el: '#app',
    data: {
        product: "SOCKS",
        description: 'a pair of warm, fuzzy socks',
        image: "./assets/green.jpg",
        altText: "here may be a pair of socks",
        linkText: "click here, if you can",
        linkToPast: "https://www.virgin.com/",
        isPremium: true,
        inventory: 5,
        onSale: true,
        inStock: true,
        details: ["80% cotton", "really green color", "best present for boyfriend/girlfriend"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        variants: [
            {
                variantId: 1908,
                variantName: "Blue socks",
                variantImage: "./assets/blue.jpg",
                variantColor: "#1e95ea",
            },
            {
                variantId: 3908,
                variantName: "Green socks",
                variantImage: "./assets/green.jpg",
                variantColor: "#1eea73",
            },
            {
                variantId: 3103,
                variantName: "Blue socks",
                variantImage: "./assets/blue.jpg",
                variantColor: "#1e95ea",
            },
            {
                variantId: 2023,
                variantName: "Green socks",
                variantImage: "./assets/green.jpg",
                variantColor: "#1eea73",
            },
        ],
        disableCl: "disabledButton",
        disableCl2: "disabledCursor",
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
        modifyImage(img) {
            this.image = img;
        },
        addToCart() {
            console.log("you are right");
        }
    }
});