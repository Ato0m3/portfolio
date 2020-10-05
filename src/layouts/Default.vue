<template>
  <div
    class="bg-background-theme text-text-primary h-screen xl:pl-64 xl:pr-64"
    :class="theme"
  >
    <div class="h-1" />
    <header class="flex m-4 xl:m-0 xl:mt-4 justify-center select-none">
      <div class="flex justify-center">
        <g-image class="rounded-full w-10 h-10 shadow-xl" src="../logo.jpeg" />
        <!-- <div class="ml-3 place-self-center text-lg text-text-secondary">GuillaumeLacoste</div> -->
      </div>
      <nav class="flex-grow flex justify-end align-middle">
        <theme-switcher
          class="mr-5"
          :theme="theme"
          @themeUpdated="updateTheme"
        />
        <g-link
          v-for="(path, name) in navRoutes"
          v-bind:key="name"
          :class="
            isCurrentRoute(path) ? 'text-text-primary border-b-4 border-primary pointer-events-none' : 'text-text-disabled'
          "
          class="nav_link relative mr-5 place-self-center"
          :to="path"
          >{{ name }}
        </g-link>
        <context-menu
          title="Others"
          :subItems="contextMenuSubItems"
          class="nav_link relative text-text-disabled place-self-center"
        />
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
import ContextMenu from "../components/ContextMenu";

export default {
  components: {
    ThemeSwitcher,
    ContextMenu
  },

  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },

  data() {
    return {
      theme: "",
      navRoutes: {
        Home: "/",
        "SideProjects": "/side-projects/",
        Resume: "/resume/",
      },
      contextMenuSubItems: {
        "Leadership&Management": "",
        "Sports": "test",
        "Test3": "test"
      }
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
  /* margin-right: theme("spacing.5");s */
  cursor: pointer;
}

.nav_link:hover {
  color: theme("colors.text.secondary");
}
</style>
