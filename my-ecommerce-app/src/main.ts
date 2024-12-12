import { createApp, h, provide } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import { createPinia } from 'pinia';
import { ApolloClients } from '@vue/apollo-composable';
import apolloClient from './services/apolloClient';

const app = createApp({
    setup() {
      provide(ApolloClients, {
        default: apolloClient
      })
    },
    render: () => h(App)
  })
app.use(createPinia());
app.use(router);
app.mount('#app');
