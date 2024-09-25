<template>
    <Layout>
    </Layout>
    <Footer />
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
