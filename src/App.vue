<template>
  <v-app :class="isIE11">
    <BaseLayout
      v-if="isAuthorized" />
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
import BaseLayout from './components/layouts/BaseLayout.vue';
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
      delay(600),
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
    BaseLayout,
    LoginForm,
  },
})
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["isIE11"] }] */
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

  private group = false;

  private mounted(): void {
    this.$vuetify.theme.dark = localStorage.darkmode === 'true';
    this.loadStatus();
    appMountedFn.apply(this);
  }

  private onLogin(value: IAuthCreds) {
    this.login(value);
  }

  private get isIE11(): Record<string, boolean> {
    return {
      'ie-css': navigator.userAgent.match(/rv:11.0/i) !== null,
    };
  }
}
</script>

<style lang="scss">
.ie-css.v-application {
  display: block;
}
</style>
