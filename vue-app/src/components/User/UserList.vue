<script setup name='UserList'>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue-demi';
import appStore from '../../stores'

const userStore = appStore.useUserStore;

const { userList } = storeToRefs(userStore);

onMounted(() => {
    userStore.fetchUsers();
})
</script>

<template>
<div>
    <div v-for='user in userList' :key='user'>
        <router-link :to="`/users/${user.id}`">{{user.username}}</router-link>
    </div>
</div>
</template>
