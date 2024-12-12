<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">Winkelmandje</h2>
    <div v-if="cartStore.cart.length > 0">
      <ul>
        <li
          v-for="item in cartStore.cart"
          :key="item.id"
          class="flex flex-col md:flex-row items-center md:items-stretch justify-between border-b py-4"
        >
          <img
            :src="item.image"
            alt="Product afbeelding"
            class="w-24 h-24 object-cover rounded-md mb-4 md:mb-0"
          />

          <div class="flex-1 md:ml-4">
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>

          <div class="flex items-center mt-4 md:mt-0">
            <button
              @click="decreaseQuantity(item)"
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
            >
              -
            </button>
            <span class="px-3">{{ item.quantity }}</span>
            <button
              @click="increaseQuantity(item)"
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-r mr-3"
            >
              +
            </button>
          </div>

          <div class="flex flex-col items-end mt-4 md:mt-0">
            <span class="text-lg font-semibold">
              €{{ (item.price * item.quantity).toFixed(2) }}
            </span>
            <button
              @click="removeFromCart(item.id)"
              class="text-red-500 hover:underline mt-2"
            >
              Verwijderen
            </button>
          </div>
        </li>
      </ul>
      <div class="flex justify-end mt-6">
        <p class="text-xl font-bold">
          Totale prijs: €{{ cartStore.totalPrice.toFixed(2) }}
        </p>
      </div>
    </div>
    <div v-else>
      <p>Je winkelmandje is leeg.</p>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { useCartStore } from '../stores/cartStore';
import { Product } from '../types';

const cartStore = useCartStore();

// Verwijder item uit winkelmandje
function removeFromCart(itemId: number) {
  cartStore.removeFromCart(itemId);
}

// Verhoog hoeveelheid
function increaseQuantity(item: Product) {
  cartStore.addToCart(item);
}

// Verlaag hoeveelheid
function decreaseQuantity(item: Product) {
  cartStore.decreaseQuantity(item.id);
}
</script>
