<template>
  <v-form
    class="form-login"
    ref="form">
    <v-card-title class="justify-center">
      <v-avatar
        tile
        size="140"
        icon="mdi-account">
      </v-avatar>
    </v-card-title>
    <v-card-title class="justify-center py-0">
      <p class="login-title text-h4 font-weight-thin text-center">Заголовок приложения</p>
    </v-card-title>
    <v-card-text class="px-sm-8 px-md-12">
      <v-text-field>
      </v-text-field>
      <v-switch
        v-model="darkMode"
        label="Dark Mode" />
    </v-card-text>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
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
</style>
