<template>
    <footer class="footer">
        <nav class="footer__container">
            <div class="footer__logo">
                <img 
                    src="@/assets/images/svg/footer-logo.svg" 
                    alt="The Movie Database (TMDB)" 
                    width="130" 
                    height="94"
                >
                <my-button 
                    className="btn-accent" 
                    @click="dialogVisible = true">
                        Приєднатися до <br/>спільноти
                </my-button>
                <my-dialog 
                    v-model:show="dialogVisible"
                >
                    <subscription-form @close="dialogVisible = false"/>
                </my-dialog>
            </div>
            <div class="footer__description">
                <div 
                    v-for="item in FooterData" 
                    :key="item.title"
                    >
                        <h3 class="footer__title">
                            {{ item.title }}
                        </h3>
                        <ul class="footer__list">
                            <li 
                                v-for="list in item.lists"
                                :key="list.name">
                                    {{ list.name }}
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';
    import FooterData from '@/config/footer-data';
    import MyButton from '@/components/UI/MyButton.vue';
    import MyDialog from './UI/MyDialog.vue';
    import SubscriptionForm from './SubscriptionForm.vue';

    const dialogVisible = ref(false);
</script>