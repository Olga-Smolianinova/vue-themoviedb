<template>
    <form>
        <h2>Зареєструвати акаунт</h2>
        <p>
            Реєстрація облікового запису безкоштовна та проста. Заповніть форму нижче, щоб розпочати.
        </p>

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

        <div class="form__btns">
            <my-button 
                className="btn-accent"
                @click="onClose"
            >
                Скасувати
            </my-button>
            <my-button
                className="btn ml"
            >
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

    function onClose() {
        emit('close', false)
    }
</script>