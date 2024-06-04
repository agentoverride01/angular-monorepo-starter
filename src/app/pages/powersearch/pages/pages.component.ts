import { Component } from '@angular/core'

@Component({
  selector: 'ps-pages',
  template: `
    <ma-card>
      <ma-header>Pages</ma-header>
      <ma-content>
        <header></header>
        <section class="ps-pages-content">
          <section>
            <div>
              <div>
                <span>Initiative</span>
                <span></span>
              </div> 
              <div>Sustanable Banking Solutions Group</div>
            </div>
            <div>ESG (Environment, Social Governance) Advisory & Financing</div>
          </section>
          <section>
            <div>
              <div>
                <span>M&A</span>
                <span></span>
              </div>
              <div>testing orderding (AMRS)</div>
            </div>
            <div></div>
          </section>
          <section>
            <div>
              <div>
                <span>M&A</span>
                <span></span>
              </div>
              <div>testing orderding (AMRS)</div>
            </div>
            <div></div>            
          </section>
        </section>
      </ma-content>
      <ma-footer></ma-footer>
    </ma-card>
  `,
  styleUrl: './pages.component.scss'
})
export class PowerSearchPagesComponent { }