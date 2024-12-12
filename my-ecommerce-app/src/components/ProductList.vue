<template>
  <div>
    <h2 class="text-3xl font-bold mb-6 text-center">Producten</h2>

    <!-- Productenlijst -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl px-4">
      <div
        v-for="product in result?.products"
        :key="product.id"
        class="p-4 border rounded-md shadow hover:shadow-lg transition-shadow bg-white flex flex-col items-center justify-between"
      >
        <img
          :src="product.image"
          alt="Product afbeelding"
          class="w-full h-36 object-cover mb-2 rounded cursor-pointer"
          @click="selectProduct(product)"
        />
        <h3 class="text-sm font-semibold text-center">
          <router-link
            :to="`/product/${product.id}`"
            class="text-blue-500 hover:underline"
          >
            {{ product.name }}
          </router-link>
        </h3>
        <p class="text-gray-500 text-sm text-center">{{ product.description }}</p>
        <p class="text-blue-600 font-bold text-base mt-2 text-center">
          €{{ product.price.toFixed(2) }}
        </p>
        <button
          class="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 text-sm"
          @click="addToCart(product)"
        >
          Toevoegen
        </button>
      </div>
    </div>

    <!-- Fallbacks -->
    <div v-if="loading" class="text-center mt-4 text-blue-500 font-semibold">
      Producten worden geladen...
    </div>
    <div v-if="error" class="text-center text-red-500 mt-4">
      Fout bij het laden: {{ error.message }}
    </div>

    <!-- Modaal -->
    <ModalProduct
      :visible="selectedProduct !== null"
      :product="selectedProduct"
      @close="deselectProduct"
      @addToCart="addToCart"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cartStore';
import { useQuery } from '@vue/apollo-composable';
import { GET_PRODUCTS } from '../queries';
import { Product } from '../types';
import ModalProduct from './ModalProduct.vue';

const cartStore = useCartStore();
const selectedProduct = ref<Product | null>(null);

function selectProduct(product: Product) {
  selectedProduct.value = product;
}

function deselectProduct() {
  selectedProduct.value = null;
}

function addToCart(product: Product | null) {
  if (product) {
    cartStore.addToCart(product);
  }
}

const { result, loading, error } = useQuery(GET_PRODUCTS);
</script>
