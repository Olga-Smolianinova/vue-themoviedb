<template>
    <header class="header">
        <nav class="container header header__show" ref="el">
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
                <li class="navigation__item link">
                    <router-link 
                        :to="{ name: 'library' }" 
                        class="active">
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