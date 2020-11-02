<template>
  <v-app>
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { of } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

import AuthLayout from './components/layouts/AuthLayout.vue';
import LoginForm from './components/forms/LoginForm.vue';

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
  private mounted(): void {
    this.$vuetify.theme.dark = localStorage.darkmode === 'true';
    appMountedFn.apply(this);
  }
}
</script>
