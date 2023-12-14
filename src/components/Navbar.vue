<template>
    <header>
        <nav class="container main-nav">
            <ul class="navigation">
                <li class="navigation__item link">
                    <router-link 
                        :to="{ name: 'home' }" 
                        exact 
                        class="active">
                        <img 
                            src="@/assets/images/svg/logo.svg" alt="Themoviedb logo" 
                            width="" 
                            height=""
                            class="navigation__logo"
                        />
                    </router-link>
                </li>
                <li class="navigation__item link">
                    <router-link 
                        :to="{ name: 'movies' }" 
                        class="active">
                            Фільми
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>