<template>
  <div class="relative" @click.prevent="toggleMenu">
      {{ title }}
    <font-awesome
      :icon="['fas', 'caret-down']"
      size="sm"
      :class="chevronColor"
    />
    <div
        style="right: 0%"
        class="p-2 shadow-lg bg-background-secondary absolute text-sm text-text-secondary rounded-sm"
        v-if="opened"
    >
        <div
            class="mb-3 whitespace-no-wrap"
            v-for="(path, name) in subItems"
            v-bind:key="name"

        >
            <g-link class="mr-6" :to="path">{{ name }}</g-link>
            <div class="w-full bg-gray-500 bg- mb-2 mt-2" style="height: 1px"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    chevronColor: {
      type: String,
      default: "text-primary"
    },
    subItems: {
        type: Object,
    }
  },
  data() {
      return {
          opened: false
      }
  },
  methods: {
    toggleMenu() {
        this.opened = !this.opened;
    },
  }
}
</script>

<style>

</style>