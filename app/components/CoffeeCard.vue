<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {useProductsStore} from "~/stores/useProductsStore";

const store = useProductsStore()

store.fetchProducts()

const { products } = storeToRefs(store)
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <CoffeeCardItem
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </div>

</template>
