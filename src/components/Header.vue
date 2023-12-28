<template>
    <header
        ref="el"
        class="header header__show" 
    >
        <nav class="container">
            <ul class="header__nav">
                <li class="header__nav-item">
                    <router-link 
                        :to="{ name: 'home' }" 
                        exact
                        router-link-exact-active
                    >
                        <img 
                            src="@/assets/images/svg/logo.svg" alt="Themoviedb logo"
                            class="header__logo"
                        />
                    </router-link>
                </li>
                <li class="header__nav-item link">
                    <router-link 
                        :to="{ name: 'movies' }"
                    >
                            Фільми
                    </router-link>
                </li>
                <li class="header__nav-item link">
                    <router-link
                        :to="{ name: 'library' }" 
                    >
                            Бібліотека
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import { ref, watch } from 'vue';
    import { useWindowScroll } from '@vueuse/core';

    const el = ref(null);
    const { y } = useWindowScroll(el);
    const SCROLL_THRESHOLD = 100;
    
    watch(y,  (newValue, oldValue)  => {
      if(newValue > SCROLL_THRESHOLD && newValue > oldValue) {
        el.value.classList.remove('header__show')
      } else {
        el.value.classList.add('header__show')
      }
    })
</script>