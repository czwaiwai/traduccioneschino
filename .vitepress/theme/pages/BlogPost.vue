<script setup>
import { data as posts } from '../posts.data.js'
</script>
<template>
    <PageTop :title="$frontmatter.title" :page-top-img="$frontmatter.pageTopImg"></PageTop>

    <section class="py-5" id="bloggrids">
        <div class="text-11 py-md-5 py-3" id="classes">
            <div class="container">
                <div v-for="post of posts"  class="row w3l-blog-single">
                    <div class="col-lg-8 offset-lg-2  blogw3-left-content">
                        <div class="single-left">
                            <!-- single post -->
                            <img :src="post.topimg" class="img-fluid radius-image" alt="" />
                            <div class="text11-content">
                                <h4 class=""><a :href="post.outurl || post.url" target="_blank" >{{ post.title }}</a></h4>
                                <h6>{{ post.date.string }}</h6>
                                <a href="javascript:void(0)" class="admin">-{{ post.author }} </a>
                                <p v-html="post.excerpt" class="mt-4 mb-3"></p>
                            </div>
                        </div>
                        <!--//blogs-right-->
                    </div>
                </div>
                <!--/w3l-footer-29-main-->
            </div>
        </div>
    </section>
    <!-- <section class="w3l-courses w3l-grids-page py-5" id="bloggrids">
        <div class="blog py-5 pt-0" id="classes">
            <div class="container">
                <Content />
                <div class="row align-items-center">
                    <div v-for="post of posts" class="col-lg-4 col-md-6 item mt-lg-5 mt-4">
                        <div class="card">
                            <div class="card-header p-0 position-relative">
                                <a :href="post.outurl || post.url" target="_blank">
                                    <div class="page">
                                        <div class="photobox photobox_triangular photobox_scale-rotated">
                                            <div class="photobox__previewbox media-placeholder">
                                                <img class="img-fluid photobox__preview media-placeholder__media"
                                                    src="/g1.jpg" alt="maketing">
                                            </div>
                                            <div class="photobox__info-wrapper">
                                                <div class="photobox__info"><span class="fas fa-plus"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-body course-details">
                                <div class="course-meta mb-3">
                                    <div class="meta-item course-lesson">
                                        <a href="javascript:void(0)"><span class="fas fa-user"></span>
                                            <span class="meta-value">{{ post.author }} </span></a>
                                    </div>

                                    <div class="meta-item course-students">
                                        <span class="far fa-calendar-alt"></span>
                                        <span class="meta-value"> {{ post.date.string }} </span>
                                    </div>
                                </div>
                                <a :href="post.outurl || post.url" target="_blank" class="course-desc">{{ post.title
                                    }}</a>
                                <p v-html="post.excerpt" class="double-line mt-2 mb-2"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
</template>
<style scoped>
.double-line {
    height: 52px;
    overflow: hidden;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>