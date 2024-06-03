import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core'
import { ButtonVariant } from './types'

@Component({
  selector: 'ma-button',
  standalone: true,
  template: `
    <button class="ma-button" (click)="onClick.emit($event)">
      <span>
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent  {
  
  @Input({ transform: booleanAttribute }) disabled: boolean = false
  @Input() variant: ButtonVariant = 'primary'

  @Output() onClick = new EventEmitter<Event>()
  
}