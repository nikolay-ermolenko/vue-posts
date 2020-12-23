<template>
  <v-form
    v-model="valid"
    class="form-login"
    ref="form"
    @submit.prevent="onSubmitForm">
    <v-card-title class="justify-center">
      <v-avatar
        tile
        size="140"
        class="ma-6">
        <Logo />
      </v-avatar>
    </v-card-title>
    <v-card-title class="justify-center py-0">
      <p class="login-title text-h4 font-weight-thin text-center">Заголовок приложения</p>
    </v-card-title>
    <v-card-text class="px-sm-8 px-md-12">
      <v-text-field
        v-model="formValue.username"
        autofocus
        required
        :rules="rules"
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
      <v-text-field
        v-model="formValue.password"
        required
        :rules="rules"
        :type="showPassword ? 'text' : 'password'"
        label="Пароль">
        <template #prepend-inner>
          <v-icon>{{ icons.mdiLock }}</v-icon>
        </template>
        <template #append>
          <v-icon
            tabindex="88"
            @click="showPassword = !showPassword">
            {{ showPassword ? icons.mdiEye : icons.mdiEyeOff }}
          </v-icon>
        </template>
      </v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-switch
        v-model="darkMode"
        label="Dark Mode"
        class="mr-4"/>
      <v-btn
        :dark="valid"
        min-width="100"
        large
        tile
        :disabled="isLoading || !valid"
        type="submit">Войти</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import {
  mdiAccount,
  mdiEye,
  mdiEyeOff,
  mdiLock,
  mdiClose,
} from '@mdi/js';
import Logo from '@/components/icons/Logo.vue';

@Component({
  components: {
    Logo,
  },
})
export default class LoginForm extends Vue {
  private get darkMode(): boolean {
    return this.$vuetify.theme.dark;
  }

  private set darkMode(value: boolean) {
    this.$vuetify.theme.dark = Boolean(value);
    localStorage.darkmode = Boolean(value);
  }

  private valid = true

  private isLoading = false

  private showPassword = false

  private rules: Function[] = [
    (v: string) => !!v || 'Это поле обязательно для заполнения',
  ]

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

  @Emit('login')
  private login() {
    return this.formValue;
  }

  private onSubmitForm() {
    this.login();
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
    -webkit-box-shadow: 0 0 0 30px #cfd8dc inset !important;
  }

  .login-title {
    word-break: break-word;
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
