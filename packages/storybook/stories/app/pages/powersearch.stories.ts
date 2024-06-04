import type { StoryObj, Meta } from '@storybook/angular'
import type { StoryThemeObj } from '@mono/storybook/utils'

import { PowerSearchComponent } from '@app/pages/powersearch/powersearch.component'
import { PowerSearchModule } from '@app/pages/powersearch/powersearch.module'

import { defineDefaultArgs } from '@mono/storybook/utils'

export default {
  title: 'Pages/PowerSearch',
  component: PowerSearchComponent,
  ...defineDefaultArgs({
    moduleMetadataOptions: {
      imports: [ PowerSearchModule ]
    }
  })
} as Meta

type Story = StoryObj<StoryThemeObj & PowerSearchComponent>

export const PowerSearch: Story = {
  args: { }
}