import { Component } from '@angular/core'

@Component({
  selector: 'm-footer',
  standalone: true,
  template: `
    <footer>
      <ng-content></ng-content>
    </footer>
  `,
  styles: /* scss */`
    :host {
      font-family: var(--font-family);

      footer {
        display: var(--footer-display);
        grid-template-columns: var(--footer-columns);
        column-gap: var(--footer-columns-gap);
        align-items: var(--footer-align-items);
        border: var(--footer-border);
        border-style: var(--footer-border-style);
        border-color: var(--footer-border-color);
        height: var(--footer-height);
        width: var(--footer-width);
        background-color: var(--footer-bg-color);
      }
    }
  `
})
export class FooterComponent { }