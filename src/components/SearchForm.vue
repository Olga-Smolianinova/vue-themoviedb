<template>
    <div class="search">
        <form class="search__form" @submit.prevent>
          <my-input
            className="search__input"
            type="text"
            name="search"
            placeholder="Пошук..."
            v-model="searchQuery"
          />

          <button 
            class="search__button"
            type="submit" 
          >
            Search
          </button>
        </form>
    </div>
</template>

<script setup>
  import MyInput from '@/components/UI/MyInput.vue';
  import { ref } from 'vue';

  const searchQuery = ref('');
</script>