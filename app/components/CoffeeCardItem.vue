<script setup lang="ts">
import type {Product} from '~/types/product'
import {useProductsStore} from "~/stores/useProductsStore";

const {product} = defineProps<{ product: Product }>()
const coffeeStore = useProductsStore()

</script>
<template>
  <div class=" flex items-center justify-center">
    <UCard class="max-w-sm w-full">
      <template #header>
        <h1 class="text-xl coffee-title">
          {{ product.name }}
        </h1>
      </template>

      <p class="text-sm text-gray-700 mb-4">
        {{ product.description }}
      </p>

      <p class="text-sm text-gray-600 mb-4">
        price per cup : $ {{ product.price }}
      </p>

      <template #footer>

        <UButton class="mr-3" color="primary" size="sm" @click="coffeeStore.addCup">
          Add cup
        </UButton>

        <UButton size="sm" @click="coffeeStore.setFavorite(product.name)">
          Make {{ product.name }} favorite
        </UButton>
      </template>
    </UCard>
  </div>
</template>

<style lang="scss" scoped></style>
