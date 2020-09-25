<template>
  <v-app>
    <v-main>
      <v-container class="fill-heightd">
        <v-row align="center">
          <h3>Hello vue ({{ text }})</h3>
        </v-row>
        <v-row align="center">      
            <v-text-field
              ref="input"
              label="Name"
              @input="onTextFieldChange" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Base from '@/common/Base.vue'
import Component from 'vue-class-component'
import { BehaviorSubject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component
export default class App extends Base {
  private buffer: number = 500
  private defaultValue: string = 'DEFAULT'
  private inputValue: string = ''
  private text: string = ''

  private subject$: BehaviorSubject<string> 
    = new BehaviorSubject<string>(this.defaultValue)

  private created(): void {
    this.observerSafe$(
        this.subject$
    ).pipe(
       debounceTime(this.buffer),
    ).subscribe((value: string) => this.text = value)
  }

  private onTextFieldChange(value: string): void {    
    this.subject$.next(value || this.defaultValue)
  }
}
</script>