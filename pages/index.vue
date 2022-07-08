<template>
  <div>
     <div style="margin: 1rem 0;">
      <PiniaLogo />
    </div>

    <h2>Hello {{ user.name }}</h2>

    <form @submit.prevent="buy">
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button @click="cart.removeItem(item.name)" type="button">X</button>
        </li>
      </ul>

      <button :disabled="!user.name">Buy</button>

      <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
      >
        Clear the cart
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { useUserStore, useCartStore } from '@/store';

export default defineComponent({
  layout: "custom",
  setup() {
    const user = useUserStore()
    const cart = useCartStore()


    const itemName = ref('')

    function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''
    }

    function clearCart() {
      if (window.confirm('Are you sure you want to clear the cart?')) {
        cart.rawItems = []
      }
    }

    async function buy() {
      const n = await cart.purchaseItems()

      console.log(`Bought ${n} items`)

      cart.rawItems = []
    }

    return {
      itemName,
      addItemToCart,
      cart,
      user,
      buy,
      clearCart,
    }
  },
})
</script>

<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
