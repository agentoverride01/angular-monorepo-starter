import { Component } from '@angular/core'

export type MyDealValue = {
  company?: string
  amount?: string
  date?: string
}

@Component({
  selector: 'ps-mydeal',
  template: `
    <ma-card>
      <ma-header>myDeal</ma-header>
      <ma-content>
        <section>
          <ul>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li> 
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>               
          </ul>
        </section>
      </ma-content>
      <ma-footer></ma-footer>
    </ma-card>    
  `,
  styleUrl: './mydeal.component.scss'
})
export class PowerSearchMyDealComponent { }