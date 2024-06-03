<script setup>
import { withBase, useData, useRouter } from 'vitepress'
</script>
<template>
    <h1 class="service_title" v-if="$frontmatter.lang ==='en'">Services</h1>
    <h1 class="service_title" v-if="$frontmatter.lang ==='cn'">服务项目</h1>
    <h1 class="service_title" v-if="$frontmatter.lang ==='es'">Servicios</h1>
</template>
<style scoped>
.service_title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 30px;
}
</style>