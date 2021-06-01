<template>
  <div class="py-3">
    <v-card>
      <v-card-title>{{ source.id }} :: {{ source.title }}</v-card-title>
      <v-card-text>{{ source.text }}</v-card-text>
      <v-text-field class="my-3 mx-10" v-model="source.label"></v-text-field>
    </v-card>
  </div>
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
