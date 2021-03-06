let eventBus = new Vue();
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
Vue.component('product-review', {
    template: `
    <form @submit.prevent="onSubmit" class="preview-form">
        <p v-if="errors.length">
            <b>Please correct the following error(s)</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <p>
            <label for="name">Name: </label>
            <input id="name" v-model="name" placeholder="name">
        </p>

        <p>
            <label for="review">Review: </label>
            <textarea id="review" v-model="review"></textarea>
        </p>

        <p>
            <label for="rating">Rating: </label>
            <select v-model.number="rating" id="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>

        <p>Would you recommend this product?</p>
        <label>
          Yes
            <input type="radio" value="Yes" v-model="recommend"/>
        </label>
        <label>
          No
            <input type="radio" value="No" v-model="recommend"/>
        </label>

        <p>
            <input type="submit" value="Submit">
        </p>
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: [],
        };
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if (this.name && this.review && this.rating && this.recommend) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                };
                
                eventBus.$emit('review-submitted', productReview);
                this.name = null;
                this.review = null;
                this.rating = null;
                this.recommend = null;
            } else {
                if (!this.name) this.errors.push("Name required");
                if (!this.review) this.errors.push("Review required");
                if (!this.rating) this.errors.push("Rating required");
                if (!this.recommend) this.errors.push("Recommendation required");
            }
        }
    }
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
Vue.component('product-tabs', {
    template: `
    <div>
        <ul>
            <span   class="tab"
                    :class="{ activeTab: selectedTab === tab }" 
                    v-for="(tab, index) in tabs"
                    :key="index"  
                    @click="selectedTab = tab"
                    >{{ tab }}
            </span>
        </ul>

        <div v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">There are no reviews yet</p>
            <ul>
                <li v-for="review in reviews">
                    <p>{{ review.name }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                    <p v-if="review.recommend === 'Yes'">I recommend this</p>
                    <p v-else-if="review.recommend === 'No'">I can not recommend this</p>
                    <p v-else>I don't know, maybe error</p>
                </li>
            </ul>
        </div>
        <div v-show="selectedTab === 'Make a Review'">
            <product-review></product-review>
        </div>
    </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews', // set from @click
        };
    },
    props: {
        reviews: {
            type: Array,
            required: true,
        },
    },
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

            <product-tabs :reviews="reviews"></product-tabs>
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
            reviews: [],
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
        },
        addReview(productReview) {
            this.reviews.push(productReview);
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
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview);
        });
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
