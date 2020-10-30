<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"/>

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"/>
      </div>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { of } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

import HelloWorld from './components/HelloWorld.vue';

export function appMountedFn() {
  const loaderEl: HTMLElement | null = document.getElementById('init-loader');

  if (!loaderEl) return;

  of(1)
    .pipe(
      first(),
      tap(() => loaderEl.classList.add('fade-out')),
      delay(1000),
    ).subscribe(() => {
      loaderEl.style.setProperty('display', 'none');
      loaderEl.classList.remove('fade-out');
    });
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private mounted(): void {
    appMountedFn.apply(this);
  }
}
</script>
