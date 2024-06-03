<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>
<template>
<v-carousel height="80wh" :show-arrows="false" >
  <v-carousel-item v-for="(banner, key) in frontmatter.banners" :src="banner.img" :key="key" cover ></v-carousel-item>
</v-carousel>
</template>
<style scoped></style>