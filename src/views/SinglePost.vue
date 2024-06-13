<script lang="ts">
import ProgressBar from '@/components/ProgressBar.vue'
import { usePostsStore } from '@/stores/posts'
import { useCategoriesStore } from '@/stores/categories'
import { mapState } from 'pinia'

export default {
  components: {
    ProgressBar
  },
  computed: {
    ...mapState(usePostsStore, ['posts']),
    ...mapState(useCategoriesStore, ['categories']),

    selectPost() {
      return this.posts.find((post) => post.id === Number(this.$route.params.id))
    },

    indices() {
      if (this.selectPost) {
        const post = this.selectPost
        const indices = Object.keys(post)
          // .filter(key => key.startsWith('indice_'))
          .filter((key) => key.startsWith('indice_'))
          .map((key, index) => ({
            name: post.id,
            slug: `indice-${index + 1}`
          }))
        return indices
      }
      return []
    }
  },
  methods: {
    getExcerptWithAnchors() {
      if (this.selectPost) {
        let excerpt = this.selectPost.excerpt
        this.indices.forEach((indice) => {
          const anchor = `<h3 id="${indice.slug}">`
          const regex = new RegExp(`<h3>`, 'i')
          excerpt = excerpt.replace(regex, anchor)
        })
        return excerpt
      }
      return ''
    }
  }
}
</script>

<template>
  <SinglePostLayout>
    <section>
      <div class="container">
        <div class="row">
          <div class="inner_blog">
            <div class="single_indice">
              <h5>ÍNDICE</h5>
              <ul>
                <li v-for="indice in indices" :key="indice.slug">
                  <a :href="`#${indice.slug}`">{{ indice.name }}</a>
                </li>
              </ul>
            </div>

            <div class="single_post" id="scroll-target-1">
              <ProgressBar />

              <nav aria-label="breadcrumb" v-for="category in categories" :key="category.id">
                <ol class="breadcrumb" v-if="selectPost?.categoryId === category.id">
                  <li class="breadcrumb-item">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li class="breadcrumb-item">{{ category.name }}</li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ selectPost?.name }}
                  </li>
                </ol>
              </nav>

              <div class="inner_img">
                <img :src="selectPost?.image" />
              </div>

              <div v-for="category in categories" :key="category.id">
                <div v-if="selectPost?.categoryId === category.id">
                  <h2>{{ category.name }}</h2>
                </div>
              </div>

              <h1>{{ selectPost?.name }}</h1>
              <!-- share social -->
              <div class="date_social">
                <h4>{{ selectPost?.date }}</h4>
                <ul class="share_links">
                  <li>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.fiduoccidente.com/repositorio/fiduoccidente/blog-fiduoccidente/educacion_financiera/2024-invertir-fic.html"
                      target="_blank"
                    >
                      <i class="fid-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/share?url=https://www.fiduoccidente.com/repositorio/fiduoccidente/blog-fiduoccidente/educacion_financiera/2024-invertir-fic.html&text=¿Esel 2024 el momento adecuado para iniciar o mantener la inversión en un Fondo de Inversión Colectiva (FIC)?"
                      target="_blank"
                    >
                      <i class="fid-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/shareArticle?url=https://www.fiduoccidente.com/repositorio/fiduoccidente/blog-fiduoccidente/educacion_financiera/2024-invertir-fic.html;title=¿Es
                      el 2024 el momento adecuado para iniciar o mantener la inversión en un Fondo de Inversión Colectiva (FIC)?"
                      target="_blank"
                    >
                      <i class="fid-linkendin"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="inner_text" v-html="getExcerptWithAnchors()"></div>
              <div class="single-postend"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SinglePostLayout>
</template>
