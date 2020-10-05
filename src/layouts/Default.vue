<template>
  <div
    class="bg-background-theme text-text-primary h-screen pl-40 pr-40"
    :class="theme"
  >
    <div class="h-1" />
    <header class="flex mt-2 justify-center">
      <nav class="flex-grow flex justify-end align-middle m-2">
        <theme-switcher
          class="mr-5"
          :theme="theme"
          @themeUpdated="updateTheme"
        />
        <g-link
          v-for="(route, name) in navRoutes"
          v-bind:key="name"
          :class="
            isCurrentRoute(route) ? 'text-text-primary' : 'text-text-disabled'
          "
          class="nav_link relative"
          :to="route"
          >{{ name }}
          <div
            v-if="isCurrentRoute(route)"
            class="h-2 w-2 rounded-full bg-primary absolute"
            style="left: 50%"
          />
        </g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher";

export default {
  components: {
    ThemeSwitcher,
  },

  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },

  data() {
    return {
      theme: "",
      navRoutes: {
        Home: "/",
        "About me": "/about/",
        Resume: "/resume/",
      },
    };
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style src="../css/main.css" />
<style>
.nav_link {
  font-size: theme("fontSize.xl");
  font-weight: theme("fontWeight.bold");
  margin-right: theme("spacing.5");
}

.nav_link:hover {
  color: theme("colors.text.tertiary");
}
</style>
