<script setup name='LogoutButton'>
import appStore from '../../stores'
import { useRouter } from 'vue-router'

const router = useRouter();
const sessionStore = appStore.useSessionStore;

const handleLogout = async () => {
    await sessionStore.logout();
    if (!sessionStore.user) {
        router.push('/login');
    }
}
</script>


<template>
    <button @click="handleLogout">Logout</button>
</template>
