import { defineStore } from 'pinia';
import { csrfFetch } from './csrf';

const useUserStore = defineStore('UserStore', {
    state: () => ({
        userList: {},
    }),
    actions: {
        async fetchUsers() {
            const response = await csrfFetch('/api/users/');

            if (response.ok) {
                const data = await response.json();
                const users = data.safeUsers;

                for (let i = 0; i < users.length; i++) {
                    this.userList[users[i].id] = users[i]
                }
            }
        },
        async fetchUser(userId) {
            const response = await csrfFetch(`/api/users/${userId}`);

            if (response.ok) {
                const loadedUser = await response.json();
                this.userList[loadedUser.id] = loadedUser;
            }
        }
    }
})

export default useUserStore;
