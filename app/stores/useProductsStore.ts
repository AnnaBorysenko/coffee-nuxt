import { defineStore } from 'pinia'
import type { Product } from '~/types/product'

export const useProductsStore = defineStore('coffee', {
    state: () => ({
        cups: 0,
        pricePerCup: 3,
        favorite: 'Latte',
        total : 0,
        products: []  as Product[],
        productsLoading: false,
        productsError: null as string | null,
    }),

    getters: {
        description: (state) => `Cups: ${state.cups}, favorite: ${state.favorite}`,
        total: (state) => state.cups * state.pricePerCup,
    },

    actions: {

        async fetchProducts() {
            this.productsLoading = true
            this.productsError = null

            try {
                this.products = await $fetch<Product[]>('/api/products')
            } catch (error) {
                this.productsError = 'error fetching products'
            } finally {
                this.productsLoading = false
            }
        },

        addCup() {
            if (this.cups < 100) {
                this.cups++
            }
        },
        removeCup() {
            if (this.cups > 0) {
                this.cups--
            }
        },
        setFavorite(name: string) {
            this.favorite = name
        },
    },
})
