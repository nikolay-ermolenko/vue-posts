// <template>
//   <span />
// </template>

// <script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
// import { ReplaySubject, Observable } from 'rxjs'
// import { takeUntil } from 'rxjs/operators'

// @Component
// export default class Base extends Vue {
//   public destroy$$: ReplaySubject<any>
//     = new ReplaySubject<any>(2)
  
//   public beforeDestroy(): void {
//     this.destroy$$.next(null)
//     this.destroy$$.complete()
//   }

//   public observerSafe$<T = any>(obs: Observable<T>): Observable<T> {
//     return obs.pipe(
//         takeUntil(this.destroy$$)
//     )
//   }
// }
// </script>