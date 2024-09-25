<template>
    <Layout>
        <template #doc-bottom>
            <Footer style="border-radius: 12px" :hasScreenshots="false" />
        </template>
    </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
import Footer from './Footer.vue'
</script>

<style>
.VPHome {
    margin-bottom: 50px !important;
}
</style>
