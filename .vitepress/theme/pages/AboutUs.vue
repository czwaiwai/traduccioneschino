<script setup></script>
<template>
    <section >
        <div class="feature-with-photo-hny py-5">
            <div class="container py-lg-5">
                <div class="feature-with-photo-content">
                    <div class="ab-in-flow row mb-lg-5 mb-3">
                        <div class="col-lg-7 ab-right pl-lg-5">
                            <!-- <h6 class="title-subhny mb-2"><span>{{ $frontmatter.title }}</span></h6> -->
                            <h3 class="title-w3l mb-4">{{ $frontmatter.title }}</h3>
                            <Content />
                        </div>
                        <div class="col-lg-5 ab-left ps-lg-5">
                            <img src="/aboutme.png" class="img-fluid radius-image" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>