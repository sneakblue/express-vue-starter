import { defineStore } from 'pinia'

const useUserStore = defineStore('UserStore', {
    state: () => ({
        userList: {},
    }),
    actions: {
        async fetchUsers() {
            const response = await fetch('/api/users/');

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                const users = data.safeUsers;

                for (let i = 0; i < users.length; i++) {
                    this.userList[users[i].id] = users[i]
                }
            }
        },
        async fetchUser(userId) {
            const response = await fetch(`/api/users/${userId}`);

            if (response.ok) {
                const loadedUser = await response.json();
                this.userList[loadedUser.id] = loadedUser;
            }
        }
    }
})

export default useUserStore;
