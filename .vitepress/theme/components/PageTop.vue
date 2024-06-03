<script setup>
import {computed} from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    pageTopImg: {
        type: String,
        default: ''
    }
})
const pageTopImgFormat = computed(() => {
    return `url(${props.pageTopImg})`
})
</script>
<template>
    <section class="w3l-about-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-top">
            <div class="container py-lg-5 py-sm-4">
                <div class="w3breadcrumb-gids text-center">
                    <div class="w3breadcrumb-info mt-5">
                        <h2 class="w3ltop-title pt-4">{{ props.title }}</h2>
                        <!-- <ul class="breadcrumbs-custom-path">
                            <li><a href="index.html">Home</a></li>
                            <li class="active"><span class="fas fa-angle-double-right mx-2"></span> Blog Grids </li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.breadcrumb-bg-top::before {
    content: "";
    background: var(--layer-1);
    position: absolute;
    top: 0;
    min-height: 100%;
    left: 0;
    right: 0;
    z-index: -1;
}
.breadcrumb-bg-top {
    background-image: v-bind(pageTopImgFormat);
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    position: relative;
    z-index: 0;
    display: grid;
    align-items: center;
    min-height: 300px;
}
</style>