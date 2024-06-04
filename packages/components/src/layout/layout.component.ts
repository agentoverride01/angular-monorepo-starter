import { Component } from '@angular/core'

@Component({
  selector: 'ma-layout',
  standalone: true,
  template: `
    <main class="ma-layout">
      <ng-content></ng-content>
    </main>
  `,
  styles: /* scss */`
    :host {
      main {
        display: var(--layout-display, grid);
        row-gap: var(--layour-row-gap);        

        ::-webkit-scrollbar {
          display: var(--layout-scrollbar, none);
        }
      }
    }
  `
})
export class LayoutComponent { }