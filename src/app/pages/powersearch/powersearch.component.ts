import { Component } from '@angular/core'

@Component({
  selector: 'powesearch',
  template: `
    <ma-layout>
      <ma-header>
        <div>There are 500 items found</div>
        <ul>
          <li>Documents</li>
          <li>People</li>
          <li>Pages</li>
          <li>Multimedia</li>
          <li>News</li>
        </ul>
      </ma-header>
      <ma-content>
        <section class="ps-content">
          <section class="ps-content--left">
            <ps-news></ps-news>
            <section>
              <ps-documents></ps-documents>
              <ps-pages></ps-pages>
            </section>
          </section>
          <section class="ps-content--right">
            <ps-people></ps-people>
            <ps-mydeal></ps-mydeal>
            <ps-research></ps-research>
          </section>
        </section>
      </ma-content>
    </ma-layout>
  `,
  styleUrl: './powersearch.component.scss'
})
export class PowerSearchComponent { }