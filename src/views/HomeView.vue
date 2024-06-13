<script lang="ts">
// import MainLayout from '@/layouts/MainLayout.vue'
import PostSecondary from '@/components/PostSecondary.vue'
import PostMain from '@/components/PostMain.vue'
import PostFeatured from '@/components/PostFeatured.vue'
import CategoryList from '@/components/CategoryList.vue'
import { usePostsStore } from '@/stores/posts'

function updateCategoryFromRouteParams(categoryIdParam: string | string[]) {
  const postStore = usePostsStore()
  const categoryId = Number(categoryIdParam)
  postStore.selectCategory(categoryId)
}

export default {
  components: {
    // MainLayout,
    PostSecondary,
    PostMain,
    PostFeatured,
    CategoryList
  },

  beforeRouteEnter(to) {
    console.log('beforeRouteEnter', to.params)
    updateCategoryFromRouteParams(to.params.categoryId)
  },
  beforeRouteUpdate(to) {
    console.log('beforeRouteUpdate', to.params)
    updateCategoryFromRouteParams(to.params.categoryId)
  }
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <CategoryList />
        <div class="postmain">
          <PostMain />
          <PostSecondary />
        </div>
        <PostFeatured />
      </div>
    </div>
  </section>
  <!-- <MainLayout>
  </MainLayout> -->
</template>
