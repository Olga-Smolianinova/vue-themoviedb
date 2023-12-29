<template>
    <footer class="footer">
        <div class="footer__container">
            <nav class="footer__nav">
                <div class="footer__logo">
                    <img 
                        src="@/assets/images/svg/footer-logo.svg" 
                        alt="The Movie Database (TMDB)" 
                        width="130" 
                        height="94"
                    >
                        <my-button 
                            class="btn-accent" 
                            @click="dialogVisible = true"
                        >
                            Приєднатися до <br />спільноти
                        </my-button>
                        <my-dialog 
                            v-model:show="dialogVisible"
                            className="dialog__content"
                        >
                            <subscription-form @close="dialogVisible = false" />
                        </my-dialog>
                </div>
                <div class="footer__info">
                    <div 
                        v-for="item in FooterData" 
                        :key="item.title"
                        class="footer__item" 
                    >
                        <h3 class="footer__title">
                            {{ item.title }}
                        </h3>
                        <ul class="footer__list">
                            <li 
                                v-for="list in item.lists" 
                                :key="list.name"
                                class="mb-8" 
                            >
                                {{ list.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <my-button 
                v-if="showScrollButton" 
                @click="scrollToTop" 
                class="btn__scroll-to-top"
            >
                <scroll-icon />
            </my-button>
        </div>
    </footer>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import FooterData from '@/composables/footer-data';
    import MyButton from '@/components/UI/MyButton.vue';
    import MyDialog from '@/components/UI/MyDialog.vue';
    import SubscriptionForm from '@/components/Subscriptionform.vue';
    import ScrollIcon from '@/components/UI/Icons/ScrollIcon.vue';

    const dialogVisible = ref(false);
    const showScrollButton = ref(false);

    onMounted(() => window.addEventListener('scroll', handleScroll));
    onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));

    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    const handleScroll = () => showScrollButton.value = window.scrollY > 200;
</script>