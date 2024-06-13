import { defineStore } from 'pinia'
import type { Category } from '@/model/Types'
// import dataCategory from '../../public/data/categories.json'
export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    // categories: dataCategory as Category[]
    _categories: [
      {
        id: 1,
        name: 'Educación Financiera'
      },
      {
        id: 2,
        name: 'Actualidad'
      },
      {
        id: 3,
        name: 'Inversión'
      },
      {
        id: 4,
        name: 'Innovación'
      },

      {
        id: 5,
        name: 'Somos Fiduoccidente'
      }
    ]
  }),
  getters: {},
  actions: {}
})
