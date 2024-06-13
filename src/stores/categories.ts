import { defineStore } from 'pinia'
import type { Category } from '@/model/Types';
import dataCategory from '../../public/data/categories.json'
export const useCategoriesStore = defineStore('categories', {
	state: () => ({
		categories: dataCategory as Category[]
	}),
	getters: {},
	actions: {},
})