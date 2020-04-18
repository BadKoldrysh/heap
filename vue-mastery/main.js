var app = new Vue({
    el: '#app',
    data: {
        product: "SOCKS",
        brand: "Hugo Socks",
        description: 'a pair of warm, fuzzy socks',
        altText: "here may be a pair of socks",
        linkText: "click here, if you can",
        linkToPast: "https://www.virgin.com/",
        isPremium: true,
        onSale: true,
        details: ["80% cotton", "really green color", "best present for boyfriend/girlfriend"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        variants: [
            {
                variantId: 1908,
                variantName: "Blue socks",
                variantImage: "./assets/blue.jpg",
                variantColor: "#1e95ea",
                variantQuantity: 10,
            },
            {
                variantId: 3908,
                variantName: "Green socks",
                variantImage: "./assets/green.jpg",
                variantColor: "#1eea73",
                variantQuantity: 0,
            },
            {
                variantId: 3103,
                variantName: "Blue socks",
                variantImage: "./assets/blue.jpg",
                variantColor: "#1e95ea",
                variantQuantity: 4,
            },
            {
                variantId: 2023,
                variantName: "Green socks",
                variantImage: "./assets/green.jpg",
                variantColor: "#1eea73",
                variantQuantity: 25,
            },
        ],
        selectedVariant: 0,
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
        modifyImage(index) {
            this.selectedVariant = index;
        },
        addToCart() {
            console.log("you are right");
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0;
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale() {
            return this.onSale ? (this.brand + this.product + " are on sale!") : (this.brand + this.product + " are not on sale, we are sorry");
        }
    },
});