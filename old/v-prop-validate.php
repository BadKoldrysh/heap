<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Vue.js Properties</title>
</head>

<body>
    <div id="app">
        <h1>Hello Vue Properties</h1>
        <price-display v-bind:price="90"></price-display>        
    </div>
    <script>
        Vue.component('price-display', {
            template: '<form><input type="text"></form>',
            props: {
                price: {
                    type: Number,
                    require: true,
                    validator(value) {
                        return value >= 0;
                    }
                },
                unit: {
                    type: String,
                    default: '$',
                }
            }
        });
        const vm = new Vue({
            el: '#app',
        });
    </script>
</body>

</html>