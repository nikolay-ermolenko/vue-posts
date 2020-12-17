<template>
  <v-app>
    <div v-if="isAuthorized">
      <v-card>
        <v-card-title>AUTH</v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-switch
            v-model="darkMode"
            label="Dark Mode"
            class="mr-4"/>
          <v-btn @click="logout">LOGOUT</v-btn>
        </v-card-actions>
      </v-card>
    </div>
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
