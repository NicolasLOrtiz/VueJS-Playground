<script lang="ts" setup>
import { ref } from "vue";

interface Item {
  id: number;
  name: string;
  purchased?: boolean;
  priority?: "low" | "medium" | "high";
}

const items = ref<Item[]>([]);
const isAddingItem = ref(false);
const newItem = ref("");
const newItemPriority = ref("low");

const addItem = () => {
  if (newItem.value === "") {
    return;
  }

  items.value.push({
    id: items.value.length + 1,
    name: newItem.value,
    purchased: false,
    priority: newItemPriority.value as "low" | "medium" | "high"
  });

  newItem.value = "";
  newItemPriority.value = "low";
};

const handleIsAddingItem = () => {
  isAddingItem.value = !isAddingItem.value;
  newItem.value = "";
  newItemPriority.value = "low";
};

const togglePurchased = (item: Item) => {
  const itemIndex = items.value.findIndex((i) => i.id === item.id);
  items.value[itemIndex].purchased = !items.value[itemIndex].purchased;
};

</script>

<template>
  <div class="card">
    <h1>Shopping List App</h1>
    <button @click="handleIsAddingItem">
      {{ isAddingItem ? "Cancel" : "Add Item" }}
    </button>

    <form v-if="isAddingItem" @submit.prevent="addItem">
      <input
        v-model.lazy.trim="newItem"
        placeholder="Add an item"
        type="text"
      />

      <label>
        <input v-model="newItemPriority" type="radio" value="low" />
        Low
      </label>

      <label>
        <input v-model="newItemPriority" type="radio" value="medium" />
        Medium
      </label>

      <label>
        <input v-model="newItemPriority" type="radio" value="high" />
        High
      </label>

      <button type="submit">Save Item</button>
    </form>
    <ul>
      <li
        v-for="({id, name, purchased, priority}, index) in items" :key="id"
        :class="{strikeout: purchased, highPriority: priority === 'high', mediumPriority: priority === 'medium' }"
        class="priority"
        @click="togglePurchased(items[index])"
      >
        {{ name }}
      </li>
    </ul>

    <p v-if="!items.length">
      Nothing here yet. Add an item to the list.
    </p>
  </div>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.priority {
  color: green;
  }

.highPriority {
  color: red;
  }

.mediumPriority {
  color: orange;
  }

.strikeout {
  text-decoration: line-through;
  color: gray;
  }
</style>
