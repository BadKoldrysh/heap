export default function (resources){
    return {
        data() {
            let initData = {
                remoteDataLoading: 0,
            };

            console.log(resources);
            // Initialize data properties
            for (const key in resources) {
                initData[key] = null;
            }
            return initData;
        },
        methods: {
            async fetchResource (key, url) {
                try {
                    this.$data[key] = await this.$fetch(url);
                } catch (e) {
                    console.error(e);
                }
            },
        },
        created() {
            for (const key in resources) {
                let url = resources[key];
                this.fetchResource(key, url);   
            }
        }
    };
}