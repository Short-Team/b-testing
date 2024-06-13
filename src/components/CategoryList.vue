<script lang="ts">
import { useCategoriesStore } from '@/stores/categories'
import { mapState } from 'pinia'
export default {
  computed: {
    // ...mapState(useCategoriesStore, ["categories"]),
    ...mapState(useCategoriesStore, ['_categories'])
  },

  methods: {
    clearCategory() {
      this.$router.push({
        name: 'home'
      })
    },
    selectCategory(categoryId: number) {
      this.$router.push({
        name: 'category',
        params: { categoryId }
      })
    }
  }
}
</script>

<template>
  <nav class="category-nav">
    <ul class="category-menu">
      <li class="category-item" link @click="clearCategory()">
        <a href="#" :class="{ active: $route.name === 'home' }">Todos</a>
      </li>

      <li
        class="category-item"
        v-for="category in _categories"
        :key="category.id"
        link
        @click="selectCategory(category.id)"
      >
        <a
          href="#"
          :class="{
            active: $route.name === 'category' && Number($route.params.categoryId) === category.id
          }"
          >{{ category.name }}</a
        >
      </li>
    </ul>
  </nav>

  <div class="iconomenu_mobil mobile">
    <div class="icon_r"><img src="@/assets/right.svg" alt="" /></div>
    <div class="icon_line"></div>
    <div class="icon_l"><img src="@/assets/left.svg" alt="" /></div>
  </div>
</template>
