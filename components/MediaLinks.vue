<template>
    <div class="items">
        <div class="grid-2 item box" v-for="media in medias" :key="media.title">
            <div class="card-icon">
                <i :class="media.icon"></i>
            </div>
            <div class="card-content">
                <h4>{{ media.title }}</h4>
                <p>{{ media.text }}</p>
                <a :href="media.link"><i class="ri-arrow-down-circle-line"></i> {{ media.linkText }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import medias from './media.json'
</script>

<style scoped lang="scss">
.items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}

.item {
    background: var(--vp-c-bg-soft);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 12px;
    color: var(--vp-c-text-1);

    p {
        color: var(--vp-c-text-2);
        font-size: 0.9rem;
        line-height: 1.5;
    }
}

.card-icon {
    font-size: 2rem;
    color: var(--vp-c-brand-1);
}
</style>
