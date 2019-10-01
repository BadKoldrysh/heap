<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Vue.js components-2</title>
</head>

<body>
    <div id="app">
        <h1>Hello Vue Components-2</h1>
        <positive-numbers></positive-numbers>
    </div>
    <script>
        Vue.component('positive-numbers', {
            template: '<p>{{ positiveNumbers.length }} positive numbers</p>',
            data() {
                return {
                    numbers: [-5, 0, 2, 1, -9, -12, 7, 3]
                };
            },
            computed: {
                positiveNumbers() {
                    return this.numbers.filter((number) => number >= 0);
                }
            }
        });
        const vm = new Vue({
            el: '#app',
        });
    </script>
</body>

</html>