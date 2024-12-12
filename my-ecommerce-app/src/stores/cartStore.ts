import { defineStore } from 'pinia';
import { Product } from '../types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Array<Product & { quantity: number }>,
  }),
  getters: {
    totalPrice: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product: Product) {
      const item = this.cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.cart = [...this.cart];
    },

    removeFromCart(productId: number) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },

    decreaseQuantity(productId: number) {
      const item = this.cart.find((i) => i.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.removeFromCart(productId);
        }
      }
    },

    emptyCart() {
      this.cart = [];
    },

    findItem(productId: number) {
      return this.cart.find((item) => item.id === productId);
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.cart.find((i) => i.id === productId);
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          this.removeFromCart(productId);
        }
        this.cart = [...this.cart];
      }
    },
  },
});
