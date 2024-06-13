<script lang="ts">
export default {}
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Educación Financiera
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Proyectos de Inversión
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Actualidad
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Inversiones
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Servicios
            </button>
          </li>
        </ul>
        <div class="iconomenu_mobil mobile">
          <div class="icon_r"><img src="@/assets/right.svg" alt="" /></div>
          <div class="icon_line"></div>
          <div class="icon_l"><img src="@/assets/left.svg" alt="" /></div>
        </div>

        <!--search resultado-->
        <div class="search_r">
          <h3>Resultados de búsqueda</h3>
          <h4>7 Resultados</h4>
        </div>
        <!--search resultado-->
        <!-- Contenidos post -->
        <!--section02-->
        <div class="post_deskt">
          <div class="post_tipped">
            <div class="card_post">
              <img src="https://dummyimage.com/750x442/000/fff" alt="FiduOccidente" />
              <div class="cardp_body">
                <h4>Abril 14 , 2024</h4>
                <h3>Proyectos de Inversión</h3>
                <h2>
                  Suspendisse sit amet leo nec ipsum tempus quis augue semper aliquam nec sed enim
                </h2>
              </div>
            </div>
            <div class="card_post">
              <img src="https://dummyimage.com/750x442/000/fff" alt="FiduOccidente" />
              <div class="cardp_body">
                <h4>Abril 14 , 2024</h4>
                <h3>Proyectos de Inversión</h3>
                <h2>Vestibulum tellus est, lobortis a tortor</h2>
              </div>
            </div>
            <div class="card_post">
              <img src="https://dummyimage.com/750x442/000/fff" alt="FiduOccidente" />
              <div class="cardp_body">
                <h4>Abril 14 , 2024</h4>
                <h3>Proyectos de Inversión</h3>
                <h2>
                  Nullam eu sapien luctus, ultrices tortor nec, tincidunt nulla pellentesque id
                  massa
                </h2>
              </div>
            </div>
          </div>
        </div>
        <!--section02-->
        <!--mobil-->
        <section class="container mobile">
          <div class="row">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="post_mobile">
                  <div class="post_tipped_mobile">
                    <div class="carousel-item active">
                      <div class="card_post">
                        <img src="https://dummyimage.com/750x442/000/fff" alt="FiduOccidente" />
                        <div class="cardp_body">
                          <h4>Abril 14 , 2024</h4>
                          <h3>Proyectos de Inversión</h3>
                          <h2>
                            Suspendisse sit amet leo nec ipsum tempus quis augue semper aliquam nec
                            sed enim
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="card_post">
                        <img src="https://dummyimage.com/750x442/000/fff" alt="FiduOccidente" />
                        <div class="cardp_body">
                          <h4>Abril 14 , 2024</h4>
                          <h3>Proyectos de Inversión</h3>
                          <h2>WWpendisse sit amet leo nec ipsum tempus quis augue semper</h2>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="card_post">
                        <img src="https://dummyimage.com/750x442/000/fff" alt="FiduOccidente" />
                        <div class="cardp_body">
                          <h4>Abril 14 , 2024</h4>
                          <h3>Proyectos de Inversión</h3>
                          <h2>Ipsum tempus quis augue semper aliquam nec sed enim</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <!--mobil-->
        <!-- Contenidos post -->
      </div>
    </div>
  </section>
</template>
