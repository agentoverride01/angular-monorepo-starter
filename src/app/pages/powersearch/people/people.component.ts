import { Component } from '@angular/core'

@Component({
  selector: 'ps-people',
  template: `
    <ma-card>
      <ma-header>People</ma-header>
      <ma-content>
        <section>
          <ma-carousel></ma-carousel>
        </section>
      </ma-content>
    </ma-card>  
  `,
  styleUrl: './people.component.scss'
})
export class PowerSearchPeopleComponent { }