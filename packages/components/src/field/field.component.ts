import { Component, Input, booleanAttribute } from '@angular/core'

@Component({
  selector: 'ma-field',
  standalone: true,
  template: `
    <section class="ma-field">
      <div class="field-container">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: /* scss */`
    :host {
      font-family: var(--font-family);

      section {
        display: grid;

        .field-container {
          display: grid;
          grid-template-columns: var(--field-alignment, auto);
          align-items: center;
          gap: var(--field-gap);
        }
      }
    }

    :host([horizontal]) {
      --field-alignment: 50% 50%;
    }
  `
})
export class FieldComponent { 

  @Input({ transform: booleanAttribute }) horizontal = false


}