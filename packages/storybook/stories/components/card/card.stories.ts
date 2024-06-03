import type { StoryObj, Meta } from '@storybook/angular'
import type { StoryThemeObj } from '@mono/storybook/utils'

import { ButtonComponent } from '@mono/components/button'
import { LabelModule } from '@mono/components/label'
import { CardModule } from '@mono/components/card'
import { LayoutModule } from '@mono/components/layout'

import { defineDefaultArgs } from '../../utils'

export default {
  title: 'Components/Card',
  component: ButtonComponent,
  ...defineDefaultArgs({  
    moduleMetadataOptions: {
      imports: [ LabelModule, CardModule, LayoutModule ]
    },
    render() {
      return {
        template: /*html */`
          <article>
            <section>
              <m-label>Header, Scrollable Content and Footer</m-label>
              <m-card>
                <m-header></m-header>
                <m-content scrollable no-scrollbar>
                  <section>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Donec vel egestas dolor, nec dignissim metus.
                      Donec augue elit, rhoncus ac sodales id, porttitor vitae est. 
                      Donec laoreet rutrum libero sed pharetra.
                      Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. 
                      Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Donec vel egestas dolor, nec dignissim metus.
                      Donec augue elit, rhoncus ac sodales id, porttitor vitae est. 
                      Donec laoreet rutrum libero sed pharetra.
                      Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. 
                      Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Donec vel egestas dolor, nec dignissim metus.
                      Donec augue elit, rhoncus ac sodales id, porttitor vitae est. 
                      Donec laoreet rutrum libero sed pharetra.
                      Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. 
                      Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
                    </p>
                  </section>
                </m-content>
                <m-footer></m-footer>
              </m-card>          
            </section>
          </article>
        `,
        styles: [ /* scss */`
          article, 
          section {
            display: grid;
            row-gap: 7px;
          }

          article {
            grid-template-columns: repeat(3, 1fr);
            column-gap: 10px;
            row-gap: 30px;
          }
        `]
      }
    }
  })
} as Meta

type Story = StoryObj<StoryThemeObj & ButtonComponent>

export const Card: Story = {
  args: {}
}