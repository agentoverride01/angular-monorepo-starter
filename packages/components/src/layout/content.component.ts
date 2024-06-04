import { Component, Input, booleanAttribute } from '@angular/core'

@Component({
  selector: 'ma-content',
  standalone: true,
  template: `
    <section class="ma-content">
      <ng-content></ng-content>
    </section>
  `,
  styles: /* scss */`
    :host {
      font-family: var(--font-family);

      section {
        display: var(--content-display);
        min-height: var(--content-min-height);
        height: var(--content-height);
        grid-template-rows: var(--content-grid-rows);
        grid-template-columns: var(--content-grid-columns);
        background-color: var(--content-bg-color);
        padding: var(--content-padding, 0);
        
        ::ng-deep {
          > header, 
          > footer {
            display: grid;
          }

          > header {
            height: var(--content-header-height);
          }

          > section {
            display: var(--content-section-display);
            row-gap: var(--content-section-row-gap);
            padding: var(--content-section-padding);
            //grid-template-columns: var(--content )
          }

          > footer {
            height: var(--content-footer-height);
          }
        }
      }
    }

    :host([scrollable]) {
      overflow-y: auto;
    }

    :host([no-scrollbar]) {
      -ms-overflow-style: none;
      scrollbar-width: none; 

      &::-webkit-scrollbar {
        display: none;
      }
    }
  `
})
export class ContentComponent { 
  @Input({ transform: booleanAttribute }) 
  scrollable = false

  @Input({ transform: booleanAttribute, alias: 'no-scrollbar' }) 
  noScrollbar = false
}