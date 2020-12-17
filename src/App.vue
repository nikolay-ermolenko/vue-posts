<template>
  <v-app>
    <v-card
      v-if="isAuthorized"
      tile
      class="col-xl-7 col-lg-8 col-md-10 pa-0 mx-auto overflow-hidden">

      <v-app-bar
        dark
        :height="58"
        color="deep-purple accent-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer />

        <v-switch
          v-model="darkMode"
          label="Dark Mode"
          class="mr-4 mt-6"/>

        <v-btn
          icon
          @click="logout">
          <v-icon>{{ icons.mdiLogout }}</v-icon>
        </v-btn>
      </v-app-bar>

       <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        style="width:80%;min-width:300px;max-width:500px;height:calc(100vh)">
        <template #prepend>
          <v-app-bar
            color="deep-purple accent-3"
            dark>
          </v-app-bar>
        </template>
<!--           <div v-bar style="width:100%;height:100%;"><div> -->
            <v-list
              nav
              dense>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text">
                <v-list-item v-for="(a, i) in [...new Array(450)]" :key="i" tile>
                  <v-list-item-title>Foo {{i}}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
      </v-navigation-drawer>

       <v-container
          style="overflow:auto;max-width:none;height:calc(100vh - 58px + 0%);"
          class="ma-0 pa-0">
      <v-card-text class="overflow-hidden">
        The navigation drawer will appear from the bottom on smaller size screens.
        <div style="height:7200px;width: 25px;background:rgba(255,0,0,.2);"/>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
         </v-container>
      <v-card-actions>
        <v-spacer />
        <v-switch
          v-model="darkMode"
          label="Dark Mode"
          class="mr-4"/>
        <v-btn @click="logout">LOGOUT</v-btn>
      </v-card-actions>
    </v-card>
    <AuthLayout
      v-else
      :isLoading="isLoading">
      <LoginForm
        @login="onLogin" />
    </AuthLayout>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { of } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';
import { mdiLogout } from '@mdi/js';

import AuthLayout from './components/layouts/AuthLayout.vue';
import LoginForm from './components/forms/LoginForm.vue';
import { GetterType } from './store/getters';
import { ActionTypes } from './store/actions';
import { IAuthCreds } from './interfaces';

export function appMountedFn() {
  const loaderEl: HTMLElement | null = document.getElementById('init-loader');

  if (!loaderEl) return;

  of(1)
    .pipe(
      first(),
      delay(800),
      tap(() => loaderEl.classList.add('fade-out')),
      delay(1000),
    ).subscribe(() => {
      loaderEl.style.setProperty('display', 'none');
      loaderEl.classList.remove('fade-out');
    });
}

@Component({
  components: {
    AuthLayout,
    LoginForm,
  },
})
export default class App extends Vue {
  // https://github.com/Armour/vue-typescript-admin-template
  @Getter(GetterType.IS_LOADING)
  private isLoading!: boolean

  @Getter(GetterType.IS_AUTHORIZED)
  private isAuthorized!: boolean

  @Action(ActionTypes.INCREMENT_LOADING)
  // eslint-disable-next-line
  private incrementLoading!: any

  @Action(ActionTypes.DECREMENT_LOCADING)
  // eslint-disable-next-line
  private decrementLoading!: any

  @Action(ActionTypes.LOAD_STATUS)
  // eslint-disable-next-line
  private loadStatus!: any

  @Action(ActionTypes.LOGIN)
  // eslint-disable-next-line
  private login!: any

  @Action(ActionTypes.LOGOUT)
  // eslint-disable-next-line
  private logout!: any

  private drawer = false;

  private icons = {
    mdiLogout,
  };

  private group = false;

  private get darkMode(): boolean {
    return this.$vuetify.theme.dark;
  }

  private set darkMode(value: boolean) {
    this.$vuetify.theme.dark = Boolean(value);
    localStorage.darkmode = Boolean(value);
  }

  private mounted(): void {
    this.$vuetify.theme.dark = localStorage.darkmode === 'true';
    this.loadStatus();
    appMountedFn.apply(this);
  }

  private onLogin(value: IAuthCreds) {
    this.login(value);
  }
}
</script>
