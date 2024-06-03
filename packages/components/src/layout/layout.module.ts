import { NgModule } from '@angular/core'

import { ContentComponent } from './content.component'
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'

const declarations = [ ContentComponent, HeaderComponent, FooterComponent ]

@NgModule({ imports: declarations, exports: declarations })
export class LayoutModule { }