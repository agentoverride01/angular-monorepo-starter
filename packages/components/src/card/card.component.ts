import { Component } from '@angular/core'

@Component({
  selector: 'ma-card',
  standalone: true,
  template: `
    <section class="ma-card">
      <ng-content></ng-content>
    </section>
  `,
  styles: /* scss */`
    :host {
      font-family: var(--font-family);
    
      section {
        display: var(--card-display);
        grid-template-rows: var(--card-grid-rows);
        padding: var(--card-padding);
        min-height: var(--card-min-height);
        height: var(--card-height);  
        width: var(--card-width);
        background-color: var(--card-bg-color);
        box-shadow: var(--card-box-shadow);
        border-radius: var(--card-border-radius);
        border: var(--card-border);
        border-color: var(--card-border-color);
        overflow: var(--card-overflow);

        &:hover { 
          border: var(--card-border-hover);
          border-color: var(--card-border-hover-color);
        }
      }
    }
  `
})
export class CardComponent {}


