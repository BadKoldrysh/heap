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
        <color-preview bg="red"></color-preview>
        <color-preview bg="green"></color-preview>
        <color-preview bg="orange"></color-preview>
        <color-preview bg="darkgreen" color="yellow"></color-preview>
        <color-preview color="white" bg="violet"></color-preview>
        <color-preview bg="maroon" color="skyblue"></color-preview>
    </div>
    <script>
        Vue.component('color-preview', {
            template: '<div class="color-preview" :style="style">Hello, my names is Vue and I\'m a ninja</div>',
            props: ['bg', 'color'],
            computed: {
                style() {
                    return {
                        backgroundColor: this.bg,
                        color: this.color
                    };
                }
            }
        });
        const vm = new Vue({
            el: '#app',
        });
    </script>
</body>

</html>