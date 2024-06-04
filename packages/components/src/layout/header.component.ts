import { Component } from '@angular/core'

@Component({
  selector: 'ma-header',
  standalone: true,
  template: `
    <header>
      <ng-content></ng-content>
    </header>
  `,
  styles: /* scss */ `
    :host {
      font-family: var(--font-family);
    
      header {
        display: var(--header-display);
        grid-template-columns: var(--header-columns);
        column-gap: var(--header-columns-gap);
        align-items: var(--header-align-items);
        border: var(--header-border);
        height: var(--header-height);
        width: var(--header-width);
        border-style: var(--header-border-style);
        border-color: var(--header-border-color);
        background-color: var(--header-bg-color);
        padding: var(--header-padding);
      }
    }
  `
})
export class HeaderComponent { }