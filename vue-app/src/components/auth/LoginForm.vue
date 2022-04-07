<script setup name='LoginForm'>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import appStore from '../../stores/index.js'

const sessionStore = appStore.useSessionStore;
const router = useRouter();
const { user } = storeToRefs(sessionStore);

const email = ref('');
const password = ref('');

watch(user, (curr) => {
    if (curr) router.push('/')
})

const handleLogin = async () => {
    await sessionStore.login(email.value, password.value);
    if (user.value) {
        router.push('/');
    }
}
</script>


<template>
    <div>
        <form @submit.prevent='handleLogin'>
            <div>
                <label for='email'>Email</label>
                <input type='text'
                    id='email'
                    v-model='email'
                    placeholder="email"
                />
            </div>
            <div>
                <label for='password'>Password</label>
                <input type='password'
                    id='password'
                    v-model='password'
                    placeholder="password"
                />
                <button
                    type='submit'
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>
