<template>
  <div class="max-w-5xl mx-auto p-6">
    <div v-if="loading" class="text-center text-blue-500 font-semibold">
      Productinformatie laden...
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      Fout bij het laden van productinformatie: {{ error.message }}
    </div>
    <div v-else-if="product" class="flex flex-col md:flex-row gap-6 items-start">
      <img
        :src="product.image"
        alt="Product afbeelding"
        class="w-full md:w-1/3 h-auto rounded shadow"
      />
      <div class="flex flex-col">
        <h2 class="text-3xl font-bold mb-4 text-gray-800">
          {{ product.name }}
        </h2>
        <p class="text-gray-600 text-base leading-relaxed mb-4">
          {{ product.description }}
        </p>
        <p class="text-blue-600 font-bold text-lg mb-4">
          €{{ product.price.toFixed(2) }}
        </p>

        <div class="flex gap-4 mt-4">
          <button
            class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 shadow-lg"
            @click="addToCart(product)"
          >
            Toevoegen aan winkelmandje
          </button>
          <router-link
            :to="'/cart'"
            class="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 shadow-lg"
          >
            Checkout
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { useCartStore } from '../stores/cartStore';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_PRODUCT_BY_ID } from '../queries';
import { Product } from '../types';

const cartStore = useCartStore();
const route = useRoute();

const product = ref<Product | null>(null);

const { result, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
  productId: route.params.id,
});

watch(result, (newResult) => {
  if (newResult && newResult.product) {
    product.value = newResult.product;
  }
});

function addToCart(product: Product) {
  cartStore.addToCart(product);
}
</script>
