import { defineStore } from 'pinia'
import { csrfFetch } from './csrf';

const useSessionStore = defineStore('sessionStore', {
    // setting of initial state
    state: () => ({
        user: null,
    }),
    actions: {
        async authenticate() {
            const response = await csrfFetch('/api/session/');
            if (response.ok) {
                const data = await response.json();
                if (data.errors) {
                    return;
                }
                this.user = data;
            }
        },
        async login(email, password) {
            console.log(email);
            console.log(password);
            const response = await csrfFetch('/api/session', {
                method: 'POST',
                body: JSON.stringify({
                    credential: email,
                    password
                })
            });

            if (response.ok) {
                const data = await response.json();
                // update the state with returned user data
                this.user = data;
            } else if (response.status < 500) {
                const data = await response.json();
                if (data.errors) {
                    return data.errors;
                }
            } else {
                return ['An error occurred. Please try again.']
            }
        },
        async logout() {
            const response = await csrfFetch('/api/session', {
                method: 'DELETE'
            });

            if (response.ok) {
                // update state and remove the user data
                this.user = null;
            }
        },
        async signUp(username, email, password) {
            const response = await csrfFetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // updating the state with new user data
                this.user = data;
                return null;
            } else if (response.status < 500) {
                const data = await response.json();
                if (data.errors) {
                    return data.errors;
                }
            } else {
                return ['An error occurred. Please try again.']
            }
        }
    }
})

export default useSessionStore;
