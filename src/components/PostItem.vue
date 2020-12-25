<template>
  <v-card class="mb-6">
    <v-card-title>{{ source.id }} :: {{ source.title }}</v-card-title>
    <v-card-text>{{ source.text }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PostItem extends Vue {
  @Prop()
  private source!: Record<string, never>;
}
</script>

<style lang="scss">
</style>
