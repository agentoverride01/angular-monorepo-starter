import { Component, Input } from '@angular/core'

@Component({
  selector: 'ma-label',
  standalone: true,
  template: `
    <label class="ma-label">
      <ng-content></ng-content>
    </label>
  `,
  styles: /* scss */`
    :host {
      font-family: var(--font-family);
      color: var(--label-text-color);

      label {
        display: var(--label-display, grid);
      }
    }
  `
})
export class LabelComponent { }