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
  <div class="post_secondary">
    <div class="post_box">
      <div v-for="(post, index) in posts" :key="post.id" @click="goToPost(post.id)">
        <div class="caption_post" v-if="post.type === 1 && index <= 2">
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
