import { Component } from '@angular/core'

@Component({
  selector: 'ps-documents',
  template: `
    <ma-card>
      <ma-header>Documents</ma-header>
      <ma-content>
        <header>
          <ul>
            <li>All</li>
            <li>Case Study</li>
            <li>Deal Process</li>
            <li>Initiative</li>
            <li>Learning</li>
            <li>Market Update</li>            
          </ul>
        </header>
        <section>
          <ul>
            <li>
              <div>
                <span>Market Update</span>
              </div>
              <div>Market Update - Pass to pending item</div>
              <div>
                <span>Published 29-May-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>Market Update</span>
              </div>
              <div>Market Update - Checking in pending item tab</div>
              <div>
                <span>Published 29-May-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>Case Study</span>
              </div>
              <div>Case Study - test 1243 (Chinese)</div>
              <div>
                <span>Published 10-April-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>Case Study</span>
              </div>
              <div>Case Study - test 1243 (Chinese)</div>
              <div>
                <span>Published 10-April-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>Case Study</span>
              </div>
              <div>Case Study - test 1243 (Chinese)</div>
              <div>
                <span>Published 10-April-24</span>
                <span>...</span>
              </div>
            </li>                                     
          </ul>
        </section>
      </ma-content>
      <ma-footer></ma-footer>
    </ma-card>
  `,
  styleUrl: './documents.component.scss'
})
export class PowerSearchDocumentsComponent { }