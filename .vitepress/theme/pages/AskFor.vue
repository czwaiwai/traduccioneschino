<template>
    <section class="w3l-products py-5" id="tabs">
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="header-sec mx-auto text-center">
                <!-- <h6 class="title-subhny mb-2">We Provide</h6> -->
                <h3 class="title-w3l mb-5">{{ $frontmatter.title }}</h3>
            </div>
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <div id="parentHorizontalTab">
                        <div class="resp-tabs-container hor_1">
                            <div class="products-content">
                                <div class="row flex-sm-column-reverse flex-md-column-reverse mt-4">
                                    <div class="col-lg-6 tabw3-left  ">
                                        <h4 v-if="$frontmatter.headTitle" class="head">{{ $frontmatter.headTitle }}</h4>
                                        <p v-if="$frontmatter.headSubTitle">{{ $frontmatter.headSubTitle }}</p>
                                        <div class="w3l-products w3l-right-book">
                                            <Content/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 tabw3-right ps-lg-5 mt-lg-0 mt-5">
                                        <img :src="$frontmatter.leftImg" class="img-fluid radius-image" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>
.w3l-products .w3l-right-book :deep(li) {
    margin-bottom: 10px;
    color: var(--heading-color);
    font-size: 16px;
    list-style: inside;
    font-weight: 600;
    list-style-type: none;
}
</style>