Vue.component('counter', {
    template: `
    <div class="counter">
        <h2>Counter: {{ counter }}</h2>

        <button v-on:click="increaseCounter">Increase</button>
        <button v-on:click="decreaseCounter" class="red-btn">Decrease</button>
        <button v-on:click="resetCounter" class="neutral-btn">Reset</button>
    </div> 
    `,
    data() {
        return {
            counter: 0,
        };
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
    }
});
Vue.component('product-variants', {
    template: `

    `,
    props: {
        variants: {
            type: Array,
            required: true,
        },
    },
});
Vue.component('product-sizes', {
    template: `
    <div class="sizes">
        <h2>SIZES</h2>
        <span v-for="size in sizes">{{ size + "  " }}</span>
    </div>
    `,
    props: {
        sizes: {
            type: Array,
            required: false,
        }
    }
});
Vue.component('product-details', {
    template: `
    <div class="productDetails">
        <h3>Product details</h3>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    </div>
    `,
    props: {
        details: {
            type: Array,
            required: true,
        }
    }
});

Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image" :alt="altText" />
            <counter></counter><br />
            <a :href="linkToPast">{{ linkText }}</a>
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <h3>Shipping: {{ shipping }}</h3>
        
            <p>{{ description }}</p>
            <h3 v-if="isPremium">It is a premium thing!</h3>
            
            <p v-if="inventory > 10">In stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of stock</p>

            <p>{{ sale }}</p>

            <product-sizes :sizes=" sizes "></product-sizes>
            
            <product-details :details=" details "></product-details>
            <h4>Product variants</h4>
            <div class="color-box"
                v-for="(variant, index) in variants" 
                :key="variant.variantId"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="modifyImage(index)"
                >
            </div>
            
            <span v-show = "onSale">On Sale!!!</span>
            <p :class="{ outOfStock: inStock }">Out of stock!</p>
            
            <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock, disabledCursor: !inStock }">Add to Cart</button>

            <button v-on:click="deleteFromCart" 
                :disabled="cartCount == 0"
                :class="{ disabledButton: inCart,
                          redBtn: !inCart }"
                >Remove</button>
        </div>
    </div>
    `,
    data() {
        return {
            product: "SOCKS",
            brand: "Hugo Socks",
            description: 'a pair of warm, fuzzy socks',
            altText: "here may be a pair of socks",
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
            removeBtn: "removeBtn",
            counter: 0,
            cart: 0,
            linkText: "click here, if you can",
            linkToPast: "https://www.virgin.com/",
        }
    },
    methods: {
        modifyImage(index) {
            this.selectedVariant = index;
        },
        addToCart() {
            this.$emit("add-to-cart-event", this.variants[this.selectedVariant].variantId);
            this.variants[this.selectedVariant].variantQuantity--;
        },
        deleteFromCart() {
            this.$emit("delete-from-cart", id);
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
        },
        shipping() {
            return this.isUserPremium ? "Free" : "2.99$";
        },
        inCart() {
            return this.cartCount == 0;
        }
    },
    props: {
        isUserPremium: {
            type: Boolean,
            required: true,
        },
        cartCount: {
            type: Number,
            required: true,
        },
    },
});

var app = new Vue({
    el: '#app',
    data: {
        premiumStatus: true,
        cart: [],
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        deleteFromCart() {
            this.cart.pop();
        },
    },
    computed: {
        cartCount() {
            return this.cart.length;
        },
    },
});
