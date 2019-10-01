<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Vue.js Sugar</title>
</head>

<body>
    <div id="app">
        <h1>Hello Vue Sugar</h1>
        <input-username value="NAME"></input-username>
        <custom-button>Hello</custom-button>
    </div>
    <script>
        Vue.component('input-username', {
            template: '<input type="text" :value="value" @input="handleInput">',
            props: {
                value: {
                    type: String,
                    required: true,
                }
            },
            methods: {
                handleInput(e) {
                    const value = e.target.value.toLowerCase();

                    // If value was changed, update it on the input too
                    if (value !== e.target.value) {
                        e.target.value = value;
                    }

                    this.$emit('input', value);
                }
            }
        });
        Vue.component('custom-button', {
            template: `<button class="custom-button">
                        <slot><span class="default-text">Default button text</span></slot>
                    </button>`,
        });
        const vm = new Vue({
            el: '#app',
        });
    </script>
</body>

</html>