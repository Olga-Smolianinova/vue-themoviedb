<template>
    <div class="search">
        <form 
          @submit.prevent
          class="search__form" 
        >
          <my-input
            type="text"
            name="search"
            placeholder="Пошук..."
            v-model="searchQuery"
            className="search__input"
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