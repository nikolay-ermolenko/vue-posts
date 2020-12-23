<template>
  <v-app-bar
    dark
    :height="58"
    class="app-bar-main"
    color="deep-purple accent-4">
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title class="font-weight-light">My files</v-toolbar-title>
    <v-spacer />
    <v-switch
      v-model="darkMode"
      label="Dark Mode"
      class="mr-4 mt-6 font-weight-light"/>
    <v-btn
      icon
      @click="logout">
      <v-icon>{{ icons.mdiLogout }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { mdiLogout } from '@mdi/js';

@Component
export default class AppBar extends Vue {
  @Emit('logout')
  private logout() {
    return this;
  }

  @Emit('toggleDrawer')
  private toggleDrawer() {
    return this;
  }

  private icons = {
    mdiLogout,
  };

  private get darkMode(): boolean {
    return this.$vuetify.theme.dark;
  }

  private set darkMode(value: boolean) {
    this.$vuetify.theme.dark = Boolean(value);
    localStorage.darkmode = Boolean(value);
  }
}
</script>

<style lang="scss" scoped>
.app-bar-main {
  position: sticky;
  top: 0;
}
</style>
