<template>
  <v-list-item tile>
    <v-list-item-title>{{ source.name }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  @Prop()
  private source!: Record<string, never>;
}
</script>

<style lang="scss">
</style>
