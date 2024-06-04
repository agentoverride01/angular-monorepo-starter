import { NgModule } from '@angular/core'

import { LayoutModule } from '@mono/components/layout'
import { CardModule } from '@mono/components/card'
import { CarouselModule } from '@mono/components/carousel'

import { PowerSearchComponent } from './powersearch.component'
import { NewsComponent } from './news/news.component'
import { PowerSearchPeopleComponent } from './people/people.component'
import { PowerSearchDocumentsComponent } from './documents/documents.component'
import { PowerSearchPagesComponent } from './pages/pages.component'
import { PowerSearchMyDealComponent } from './mydeal/mydeal.component'
import { PowerSearchResearchComponent } from './research/research.component'

@NgModule({
  declarations: [ 
    PowerSearchComponent,
    NewsComponent,
    PowerSearchPeopleComponent,
    PowerSearchDocumentsComponent,
    PowerSearchPagesComponent,
    PowerSearchMyDealComponent,
    PowerSearchResearchComponent
  ],
  imports: [ 
    LayoutModule,
    CardModule,
    CarouselModule
  ],
  exports: [ PowerSearchComponent ]
})
export class PowerSearchModule { }