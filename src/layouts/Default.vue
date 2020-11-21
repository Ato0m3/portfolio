<template>
  <div
    class=" flex flex-col bg-background-theme text-text-primary h-full p-4 xl:pt-4 xl:p-0 xl:pl-64 xl:pr-64"
    :class="theme"
  >
    <div class="h-1" />
    <header>
      <nav class="flex items-center flex-wrap">
        <g-image class="rounded-full shadow-xl" width="40" height="40" quality="100" src="../logo.jpeg" />
        <div class="flex-grow"/>
        <theme-switcher
          class="mr-5"
          :theme="theme"
          @themeUpdated="updateTheme"
        />
        <div class="sm:hidden">
          <font-awesome
            @click="navOpened = !navOpened"
            class="cursor-pointer"
            :icon="['fas', 'bars']"
            size="lg"
            :class="navOpened ? 'text-primary' : 'text-text-primary'"
          />
        </div>
        <div class="sm:hidden" style="flex-basis: 100%" />
        <div :class="!navOpened ? 'hidden sm:flex' : ''" class="flex flex-col mt-8 sm:mt-0 sm:flex-row justify-center items-center w-full sm:w-auto">
          <g-link
            v-for="(path, name, index) in navRoutes"
            v-bind:key="name"
            class="nav_link relative place-self-center mb-4 sm:mb-0"
            :class="`${index < Object.values(navRoutes).length - 1 ? 'mr-0 sm:mr-5 ' : ''} ${isCurrentRoute(path) ? 'text-text-primary border-b-4 border-primary pointer-events-none' : 'text-text-disabled'}`"
            :to="path"
            >{{ name }}
          </g-link>
        </div>
      </nav>
    </header>
    <main class="">
      <div class="text-primary text-5xl mt-8">{{title}}</div>
      <slot />
    </main>
    <footer class="bg-background-secondary h-20 flex flex-col items-center justify-center pt-3">
      <div>
        <g-link class="social_icon" to="https://github.com/Ato0m3">
          <font-awesome
            :icon="['fab', 'github']"
            size="2x"
          />
        </g-link>
        <g-link class="social_icon" to="https://gitlab.com/Ato0m3">
          <font-awesome
            :icon="['fab', 'gitlab']"
            size="2x"
          />
        </g-link>
        <g-link class="social_icon" to="https://www.linkedin.com/in/guillaume-lacoste-711b73146/">
          <font-awesome
            :icon="['fab', 'linkedin']"
            size="2x"
          />
        </g-link>
      </div>
      <div class="mt-1 text-text-disabled">© 2020 Guillaume Lacoste</div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
  }
}
</static-query>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher";
import ContextMenu from "../components/ContextMenu";

export default {
  props: {
    title: {
      type: String,
    },
  },
  components: {
    ThemeSwitcher,
    ContextMenu
  },

  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },

  data() {
    return {
      navOpened: false,
      theme: "",
      navRoutes: {
        Home: "/",
        Resume: "/resume/",
        "SideProjects": "/side-projects/",
      },
      contextMenuSubItems: {
        "International mobility": "/international-mobility/",
        "Leadership&Management": "/leadership-management/",
        "Sports": "sports",
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

.social_icon {
  margin-right: 20px;
}

.social_icon:hover {
  color: theme("colors.text.disabled");
}
</style>
