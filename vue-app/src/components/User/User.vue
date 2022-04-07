<script setup name='User'>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import appStore from '../../stores/index'

const router = useRouter();
const route = useRoute();
const userId = route.params.userId;
const userStore = appStore.useUserStore;
const { userList } = storeToRefs(userStore);

if (!userId) {
    router.push('/');
}

onMounted(() => {
    userStore.fetchUser(userId);
})

</script>


<template>
    <ul>
        <div v-if='userList'>
            <li>
                <strong>User Id</strong> {{userList[userId].id}}
            </li>
            <li>
                <strong>Username</strong> {{userList[userId].username}}
            </li>
            <li>
                <strong>Email</strong> {{userList[userId].email}}
            </li>
        </div>
    </ul>
</template>
