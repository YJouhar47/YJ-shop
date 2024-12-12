<template>
    <div
      v-if="visible"
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 w-1/2 shadow-lg">
        <h3 class="text-2xl font-bold mb-4 text-center">{{ product?.name }}</h3>
  
        <div class="flex justify-center mb-4">
          <img
            :src="product?.image"
            alt="Geselecteerd product"
            class="w-48 h-48 object-contain rounded"
          />
        </div>
  
        <p class="text-gray-600 text-center mb-4">{{ product?.description }}</p>
        <p class="text-blue-600 font-bold text-lg mt-4 text-center">
          €{{ product?.price.toFixed(2) }}
        </p>
  
        <div class="flex justify-end gap-4 mt-6">
          <button
            class="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            @click="closeModal"
          >
            Sluiten
          </button>
          <button
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            @click="addToCart"
          >
            Toevoegen aan winkelmandje
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue';
  import { Product } from '../types';
  
  // Props
  const props = defineProps({
    visible: {
      type: Boolean,
      required: true, 
    },
    product: {
      type: Object as () => Product | null,
      required: false,
    },
  });
  
  const emit = defineEmits<{
    (event: 'close'): void;
    (event: 'addToCart', product: Product | null): void;
  }>();
  
  function closeModal() {
    emit('close');
  }
  
  function addToCart() {
    if (props.product) {
      emit('addToCart', props.product);
    }
  }
  </script>
  