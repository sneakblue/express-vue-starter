<script setup name='SignUpForm'>
import appStore from '../../stores/index.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const sessionStore = appStore.useSessionStore;
const router = useRouter();
const { user } = storeToRefs(sessionStore);
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const repeatPassword = ref('');
    const errors = ref([]);

watch(user, (curr) => {
    if (curr) router.push('/');
});

const handleSignup = async () => {
    if (password.value === repeatPassword.value) {
        const data = await sessionStore.signUp(username.value, email.value, password.value);
        if (data) {
            errors.value = data;
        }
    }
}

</script>

<template>
    <div>
        <form @submit.prevent='handleSignup'>
            <div v-for='error in errors' :key='error'>
                {{error}}
            </div>
            <div>
                <label for='username'>User Name</label>
                <input type='text'
                    id='username'
                    v-model="username"
                />
            </div>
            <div>
                <label for='email'>Email</label>
                <input type='text'
                    id='email'
                    v-model="email"
                />
            </div>
            <div>
                <label for='password'>Password</label>
                <input type='password'
                    id='password'
                    v-model="password"
                />
            </div>
            <div>
                <label for='repeat_password'>Repeat Password</label>
                <input type='password'
                    id='repeat_password'
                    v-model='repeatPassword'
                />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
</template>
