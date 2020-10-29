<template>
  <h1>Hello</h1>
  <!-- <v-app>
    <v-main>
      <v-container class="fill-heightd">
        <v-row align="center">
          <h3>Hello vue [avoid value = "zzz"]</h3>
        </v-row>
        <v-row>
          <v-slider 
            v-model="buffer" 
            label="Buffer size (ms)" 
            :hint="buffer.toString()"
            persistent-hint
            step="50"
            min="0" 
            max="900" />
        </v-row>
        <v-row align="center">
            <v-text-field
              ref="input"
              label="Value"
              @input="onTextFieldChange" />
        </v-row>
        <v-row align="center">
          <p class="value">{{ text}}</p>
        </v-row>
      </v-container>
    </v-main>
  </v-app> -->
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import Vue from 'vue'
// import Base from '@/common/Base.vue'
// import Component from 'vue-class-component'
// import { BehaviorSubject, timer } from 'rxjs'
// import { debounce, filter, map, distinctUntilChanged } from 'rxjs/operators'

@Component
export default class App extends Vue {
  // private buffer: number = 500
  // private defaultValue: string = 'DEFAULT'
  // private inputValue: string = ''
  // private text: string = ''

  // private subject$: BehaviorSubject<string> 
  //   = new BehaviorSubject<string>(this.defaultValue)

  // private created(): void {
  //   this.observerSafe$(this.subject$)
  //     .pipe(
  //       debounce(() => timer(this.buffer)),
  //       distinctUntilChanged(),
  //       filter((value: string) => value.toLowerCase() !== 'zzz'),
  //       map((value: string) => value.toLowerCase()),
  //     )
  //     .subscribe((value: string) => this.text = value)
  // }

  // private onTextFieldChange(value: string): void {
  //   this.subject$.next(value || this.defaultValue)
  // }
}
</script>

<style scoped>
.value {
  font-family: monospace;
  background: #ffe;
}
</style>