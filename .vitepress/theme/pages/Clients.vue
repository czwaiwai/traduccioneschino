<template>
    <PageTop :title="$frontmatter.title" :page-top-img="$frontmatter.pageTopImg"></PageTop>
    <Content />
    <div class=" py-5" id="team">
        <div class="container py-md-5 py-3">
            <!-- <div class="header-secw3 text-center">
                <div class="header-secw3 text-center">
                    <h6 class="title-subhny mb-2">Our Team</h6>
                    <h3 class="title-w3l mb-3">
                        Creative Team
                    </h3>
                </div>
            </div> -->
            <div class="row w3ls_team_grids text-center">
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="#"> <img src="/team1.jpg" alt=" " class="img-fluid radius-image"></a>
                        <div class="box-content">
                            <h3 class="title">Web Developer</h3>
                            <!-- <ul class="icon">
                                <li><a href="#" class="fab fa-facebook-f"></a></li>
                                <li><a href="#" class="fab fa-instagram"></a></li>
                            </ul> -->
                        </div>
                    </div>

                    <h4><a href="#url" class="title-head">
                            Glendell Paul</a></h4>
                    <p>Lorem ipsum</p>
                </div>
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="#"> <img src="/team2.jpg" alt=" " class="img-fluid radius-image"></a>
                        <div class="box-content">
                            <h3 class="title">Editor</h3>
                            <!-- <ul class="icon">
                                <li><a href="#" class="fab fa-facebook-f"></a></li>
                                <li><a href="#" class="fab fa-instagram"></a></li>
                            </ul> -->
                        </div>
                    </div>
                    <h4><a href="#url" class="title-head">
                            Dania Ruthor</a></h4>
                    <p>Lorem ipsum</p>
                </div>
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="#"> <img src="/team3.jpg" alt=" " class="img-fluid radius-image"></a>
                        <div class="box-content">
                            <h3 class="title">UX Designer</h3>
                            <!-- <ul class="icon">
                                <li><a href="#" class="fab fa-facebook-f"></a></li>
                                <li><a href="#" class="fab fa-instagram"></a></li>
                            </ul> -->
                        </div>
                    </div>
                    <h4><a href="#url" class="title-head">
                            Gambria Rich</a></h4>
                    <p>Lorem ipsum</p>
                </div>
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="#"> <img src="/team4.jpg" alt=" " class="img-fluid radius-image"></a>
                        <div class="box-content">
                            <h3 class="title">Web Designer</h3>
                            <!-- <ul class="icon">
                                <li><a href="#" class="fab fa-facebook-f"></a></li>
                                <li><a href="#" class="fab fa-instagram"></a></li>
                            </ul> -->
                        </div>
                    </div>
                    <h4><a href="#url" class="title-head">
                            Laura Carl</a></h4>
                    <p>Lorem ipsum</p>
                </div>

            </div>
        </div>
    </div>
</template>