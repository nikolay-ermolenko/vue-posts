<template>
  <v-main>
    <v-card
      tile
      class="main-card col-xl-7 col-lg-8 col-md-10 pa-0 mx-auto overflow-scroll">
      <AppBar
        @logout="logout"
        @toggleDrawer="drawer = !drawer" />
    <h3 class="font-weight-light">ua: {{ userAgent }}</h3>
    <virtual-list
      class="px-5"
      :keeps="20"
      :page-mode="true"
      :data-key="'id'"
      :data-sources="posts"
      :data-component="PostItem"
      :estimate-size="20" />
    </v-card>
    <v-navigation-drawer
        temporary
        fixed
        v-model="drawer"
        style="width:80%;min-width:300px;max-width:600px;">
         <v-list
            nav
            dense
            class="pa-0">
            <v-list-item-group
              active-class="deep-purple--text">
              <virtual-list
                class="list"
                style="height: 100vh; overflow-y: auto;"
                :page-mode="false"
                :data-key="'id'"
                :data-sources="array"
                :data-component="MenuItem"
                :keeps="50"
                :estimate-size="40" />
            </v-list-item-group>
          </v-list>
      </v-navigation-drawer>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VirtualList from 'vue-virtual-scroll-list';
import { Action } from 'vuex-class';
import { mdiLogout } from '@mdi/js';

import AppBar from '@/components/bar/AppBar.vue';
import MenuItem from '@/components/MenuItem.vue';
import PostItem from '@/components/PostItem.vue';
import getSentences from '@/utils/sentences';
import { ActionTypes } from '@/store/actions';

@Component({
  components: {
    AppBar,
    VirtualList,
  },
})
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["userAgent"] }] */
export default class BaseLayout extends Vue {
  @Action(ActionTypes.LOGOUT)
  private logout!: never

  private drawer = false;

  private MenuItem = MenuItem;

  private PostItem = PostItem;

  private array = [...new Array(300)].map((_, i) => ({
    id: i,
    name: `Item # ${i} :: ${Math.random()}`,
  }))

  private posts = [...new Array(1500)].map((_, i) => ({
    id: i,
    title: getSentences(1, 3),
    text: getSentences(3, 22),
    label: '',
    status: false,
  }))

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

  private get userAgent(): string {
    return navigator.userAgent;
  }
}
</script>

<style lang="scss">
.main-card {
  height: 100%;
}

.ie-css {
  .main-card {
    padding-top: 58px !important;
  }
}
</style>
