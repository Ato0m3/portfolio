<template>
  <a class="self-center" href="#" @click.prevent="toggleTheme">
    <font-awesome
      v-if="theme === 'theme-light'"
      :icon="['far', 'moon']"
      size="lg"
      class="transition duration-300 ease-in-out text-gray-500 hover:text-gray-600"
    />
    <font-awesome
      v-else
      :icon="['far', 'sun']"
      size="lg"
      class="transition duration-300 ease-in-out text-yellow-500 hover:text-yellow-300"
    />
  </a>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme =
        this.theme === "theme-light" ? "theme-dark" : "theme-light";
      localStorage.setItem("theme", newTheme);
      this.$emit("themeUpdated", newTheme);
    },
  },
};
</script>

<style>
</style>