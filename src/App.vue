<template>
  <v-app>
    <AuthLayout :isLoading="isLoading">
      <LoginForm
        @loginstart="onLoginStart"
        @loginend="onLoginEnd" />
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

  @Action(ActionTypes.INCREMENT_LOADING)
  // eslint-disable-next-line
  private incrementLoading!: any

  @Action(ActionTypes.DECREMENT_LOCADING)
  // eslint-disable-next-line
  private decrementLoading!: any

  private mounted(): void {
    this.$vuetify.theme.dark = localStorage.darkmode === 'true';
    appMountedFn.apply(this);
  }

  private onLoginStart() {
    this.incrementLoading();
  }

  private onLoginEnd() {
    this.decrementLoading();
  }
}
</script>
