<template>
    <section class=" py-5" id="projects">
        <div class="container py-md-5 py-2">
            <div class="header-secw3 text-center mb-5">
                <!-- <h6 class="title-subhny mb-2">faqs</h6> -->
                <h3 class="title-w3l mb-4">{{ $frontmatter.title }}</h3>
            </div>
            <div class="row">
                <div class="col-lg-6 mx-auto pe-lg-5">
                    <div class="w3hny-business-img">
                        <img src="/g8.jpg" alt="" class="img-fluid radius-image">
                    </div>

                </div>
                <div class="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
                    <Content />
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
:deep(.custom-block) {
    margin-bottom: 16px;
}
</style>