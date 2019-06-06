import Vue from 'vue'
import App from './app.vue'

import io from 'socket.io-client';

import { VueLovelyYokefellowPlugin } from '../src/index'


Vue.use(VueLovelyYokefellowPlugin(io('ws://127.0.0.1:3000')), {
    // uid: () => app.user.id,
})

const app = new Vue({
    render: h => h(App),
    data: {
        user: {}
    },
    mounted () {
        setTimeout(() => {
            this.user = { id: 1 }
        })
    }
});

window.app = app;

app.$mount('#app');