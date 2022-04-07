<script setup name='NavBar'>
import LogoutButton from '../auth/LogoutButton.vue'
</script>

<template>
    <nav>
        <ul>
            <li>
                <router-link class='nav-item' to='/'>
                    Home
                </router-link>
            </li>
            <li>
                <router-link class='nav-item' to='/login'>
                    Login
                </router-link>
            </li>
            <li>
                <router-link class='nav-item' to='/sign-up'>
                    Sign Up
                </router-link>
            </li>
            <li>
                <router-link class='nav-item' to='/users'>
                    Users
                </router-link>
            </li>
            <li>
                <LogoutButton />
            </li>
        </ul>
    </nav>
</template>
