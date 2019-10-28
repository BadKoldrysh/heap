let baseUrl;

export default {
    install(Vue, options) {
        console.log('Installed!', options);
        //Plugin options
        baseUrl = options.baseUrl;

        Vue.prototype.$fetch = $fetch;
    },
};

export async function $fetch(url, options) {
    const response = await fetch(`${baseUrl}${url}`, finalOptions);
    const finalOptions = Object.assign({}, {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }, options);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        const message = await response.text();
        const error = new Error(message);
        error.response = response;
        throw error;
    }
}
