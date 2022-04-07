import { defineStore } from 'pinia'

const useSessionStore = defineStore('sessionStore', {
    // setting of initial state
    state: () => ({
        user: null,
    }),
    actions: {
        async authenticate() {
            const response = await fetch('/api/auth/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                if (data.errors) {
                    return;
                }
                this.user = data;
            }
        },
        async login(email, password) {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
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
            const response = await fetch('/api/auth/logout', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                // update state and remove the user data
                this.user = null;
            }
        },
        async signUp(username, email, password) {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
