<template>
  <v-form
    class="form-login"
    ref="form">
    <v-card-title class="justify-center">
      <v-avatar
        tile
        size="140">
        <v-icon>{{ icons.mdiAccount }}</v-icon>
      </v-avatar>
    </v-card-title>
    <v-card-title class="justify-center py-0">
      <p class="login-title text-h4 font-weight-thin text-center">Заголовок приложения</p>
    </v-card-title>
    <v-card-text class="px-sm-8 px-md-12">
      <v-text-field
        v-model="formValue.username"
        required
        ref="username"
        label="Логин">
        <template #prepend-inner>
          <v-icon>{{ icons.mdiAccount }}</v-icon>
        </template>
        <template #append>
          <v-icon
            v-show="!isFormEmpty"
            tabindex="66"
            @click="onClearClick">{{ icons.mdiClose }}</v-icon>
        </template>
      </v-text-field>
      <v-switch
        v-model="darkMode"
        label="Dark Mode" />
    </v-card-text>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {
  mdiAccount,
  mdiEye,
  mdiEyeOff,
  mdiLock,
  mdiClose,
} from '@mdi/js';

@Component
export default class LoginForm extends Vue {
  private get darkMode(): boolean {
    return this.$vuetify.theme.dark;
  }

  private set darkMode(value: boolean) {
    this.$vuetify.theme.dark = Boolean(value);
    localStorage.darkmode = Boolean(value);
  }

  isLoading = true

  private icons: { [key: string]: string } = {
    mdiAccount,
    mdiEye,
    mdiEyeOff,
    mdiLock,
    mdiClose,
  }

  private formValue: { [key: string]: string | null } = {
    username: null,
    password: null,
  }

  private get isFormEmpty(): boolean {
    const { username, password } = this.formValue || {};

    if ((username === null
      || username === undefined
      || username.toString() === '')
      && (password === null
      || password === undefined
      || password.toString() === '')) {
      return true;
    }
    return false;
  }

  private onClearClick(): void {
    // eslint-disable-next-line
    (this.$refs.form as any).reset();
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
.form-login{
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
  }
}
.theme--dark {
  .form-login{
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #1e1e1e inset !important;
      -webkit-text-fill-color: #ffffff !important;
    }
  }
}
</style>
