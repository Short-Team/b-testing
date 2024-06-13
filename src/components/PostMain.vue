<script lang="ts">
import { usePostsStore } from '@/stores/posts'
import { useCategoriesStore } from '@/stores/categories'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(usePostsStore, ['posts']),
    ...mapState(useCategoriesStore, ['_categories'])
  },

  methods: {
    goToPost(id: number) {
      this.$router.push({
        name: 'single-post',
        params: { id }
      })
    }
  }
}
</script>

<template>
  <div class="post_primary">
    <div v-for="(post, index) in posts" :key="post.id" @click="goToPost(post.id)">
      <div v-if="index <= 0">
        <img :src="post.image" alt="FiduOccidente" />
        <div class="veladura"></div>
        <div class="caption_post">
          <div v-for="category in _categories" :key="category.id">
            <div v-if="post.categoryId === category.id">
              <h4>{{ post.date }}</h4>
              <h3>{{ category.name }}</h3>
              <h2>{{ post.name }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
