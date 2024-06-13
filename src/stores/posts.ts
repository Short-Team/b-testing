import { defineStore } from 'pinia'
import type { Post } from '@/model/Types'
import dataPost from '../../public/data/post.json'
export const usePostsStore = defineStore('posts', {
  state: () => ({
    categoryId: null as number | null,
    _posts: dataPost as Post[]
  }),
  getters: {
    posts(state) {
      if (!state.categoryId) {
        return state._posts
      }
      return state._posts.filter((p) => p.categoryId === state.categoryId)
    }
  },
  actions: {
    selectCategory(categoryId: number) {
      this.categoryId = categoryId
    }
  }
})
