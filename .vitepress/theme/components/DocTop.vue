<template>
<div class="top_banner">
    <h1 class="top_banner_h1"> {{ $frontmatter.title }}</h1>
</div>
</template>
<style scoped>

.top_banner {
    position:relative;
    background:url(/banner4.jpg) no-repeat center;
    background-size:cover;
    height:300px;
}
.top_banner_h1 {
    font-size:40px;
    font-weight: bold;
    color:#FFF;
    position: absolute;
    width:100%;
    left:0;
    top:0;
    z-index: 2;
    padding:100px;
    text-align: center;
}
.top_banner:before {
    content: "";
    background: rgb(0 0 0 / 75%);
    position: absolute;
    top: 0px;
    min-height: 100%;
    left: 0px;
    right: 0px;
    z-index: 1;
}
</style>