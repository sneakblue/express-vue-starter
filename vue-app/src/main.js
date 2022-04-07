import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { registerStore } from './stores/index.js'
import { router } from './router'
import { restoreCSRF, csrfFetch } from './stores/'


if (process.env.NODE_ENV !== "production") {
    restoreCSRF();

    window.csrfFetch = csrfFetch;
}

// creation of the app
const app = createApp(App);

// Passing pinia root store to the app
app.use(createPinia());
// Here we are instantiating the different stores (pieces of state)
registerStore();

//Here we attach the router to our instance of the app
app.use(router);

app.mount('#app');
