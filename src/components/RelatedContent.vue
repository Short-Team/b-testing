<script lang="ts">
import { usePostsStore } from '@/stores/posts'
import { useCategoriesStore } from '@/stores/categories'
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(usePostsStore, ['_posts']),
    ...mapState(useCategoriesStore, ['_categories']),

    firstThreePosts() {
      return this._posts.slice(0, 3)
    }
  },

  methods: {
    goToPost(id: number) {
      this.$router.push({
        name: 'single-post',
        params: { id }
      })
    },

    getCategory(post: Number) {
      return this._categories.find((category) => category.id === post)
    }
  }
}
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="related_content">
          <h5>Contenido relacionado</h5>

          <div class="post_deskt">
            <div class="post_tipped">
              <div
                class="card_post"
                v-for="post in firstThreePosts"
                :key="post.id"
                @click="goToPost(post.id)"
              >
                <div v-if="getCategory(post.categoryId)">
                  <img :src="post.image" alt="FiduOccidente" />
                  <div class="cardp_body">
                    <h4>{{ post.date }}</h4>
                    <h3>{{ getCategory(post.id) }}</h3>
                    <h2>{{ post.name }}</h2>
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
