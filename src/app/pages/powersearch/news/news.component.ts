import { Component } from '@angular/core'

@Component({
  selector: 'ps-news',
  template: `
    <ma-card>
      <ma-header>News and Announcement</ma-header>
      <ma-content>
        <section>
          <ma-carousel>
            
          </ma-carousel>
        </section>
      </ma-content>
    </ma-card>
  `,
  styleUrl: './news.component.scss'
})
export class NewsComponent { } 