<template>
  <v-container
    fill-height
    fluid
    class="auth-layout">
    <v-row
      align="center"
      justify="center">
        <v-col
          cols="12"
          sm="8"
          md="5"
          xl="3">
          <v-card
            tile
            :loading="isLoading"
            :disabled="!isLoading"
            elevation="2">
            <template #progress>
              <v-progress-linear
                absolute
                indeterminate
                color="progress"
                height="6" />
            </template>
            <slot />
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AuthLayout extends Vue {
  isLoading = true
}
</script>

<style lang="scss" scoped>
</style>
