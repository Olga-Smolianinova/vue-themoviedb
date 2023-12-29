<template>
    <form>
        <h2>Зареєструвати акаунт</h2>
        <p>Реєстрація облікового запису безкоштовна та проста. Заповніть форму нижче, щоб розпочати.</p>

        <my-input 
            type="text" 
            placeholder="Ім’я"
            v-model="firstName"
        />
        <my-input 
            type="text" 
            placeholder="Прізвище"
            v-model="lastName"
        />
        <my-input 
            type="email" 
            name="email"
            placeholder="Email"
            v-model="email"
        />

        <div class="flex-justify-flex-end">
            <my-button 
                class="btn-accent"
                @click="onClose"
            >
                Скасувати
            </my-button>
            <my-button  class="btn ml-20">
                Відправити
            </my-button>   
        </div>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import MyInput from '@/components/UI/MyInput.vue';
    import MyButton from '@/components/UI/MyButton.vue';

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');

    const emit = defineEmits(['close']);

    const onClose = () => emit('close', false)
</script>