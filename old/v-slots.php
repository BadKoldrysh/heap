<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Vue.js Slots</title>
</head>

<body>
    <div id="app">
        <h1>Hello Vue Slots</h1>
        <custom-button></custom-button>

        <blog-post :author="author">
            <h2 slot="header">{{ this.title }}</h2>

            <p>Blog post content</p>

            <p>More blog post content</p>
        </blog-post>

        <user-data slot-scope="user">
            <p v-if="user">User name: {{ user.name }}</p>
        </user-data>

        <!-- <blog-listing :posts="posts"></blog-listing> -->
    </div>
    <script>
        // Vue.component('blog-listing', {
        //     template: ` <div>
        //                     <div v-if="post in posts">
        //                         <h1>{{ post.title }}</h1>

        //                         <slot name="summary" :post="post">
        //                             <p>{{ post.summary }}</p>
        //                         </slot>
        //                     </div>
        //                 </div>`,
        //     data: () => ({
        //         posts: [
        //             {
        //                 title: 'First article',
        //                 summary: 'First but not the last, bla-bla'
        //             },
        //             {
        //                 title: 'Second article',
        //                 summary: 'Second but not the last, bla-bla'
        //             }
        //         ]
        //     })
        // });
        Vue.component('user-data', {
            template: '<div class="user"><slot :user="user"></slot></div>',
            data: () => ({
                user: undefined,
            }),
            mounted() {
                this.user = 'brbrbrbrbr';
            }
        });
        Vue.component('blog-post', {
            template:   `<section class="blog-post">
                            <header>
                                <slot name="header"></slot>
                                <p>Post by {{ author.name }}</p>
                            </header>
                            <main>
                                <slot></slot>
                            </main>
                        </section>`,
            props: ['author', 'title'],
            
        });
        Vue.component('custom-button', {
            template: `<button class="custom-button">
                        <slot><span class="default-text">Default button text</span></slot>
                    </button>`,
        });
        const vm = new Vue({
            el: '#app',
            data: {
                author: {
                    name: 'Big boss',
                },
                title: 'The best title of the world',
            },
        });
    </script>
</body>

</html>