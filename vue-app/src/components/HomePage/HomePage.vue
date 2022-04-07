<script setup name='HomePage'>
import appStore from '../../stores/index.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const router = useRouter();
const sessionStore = appStore.useSessionStore;
const { user } = storeToRefs(sessionStore);

watch(user, (curr) => {
    if (!curr) router.push('/login');
})

</script>


<template>
    <span>
        Hello from the Homepage!
    </span>
</template>
