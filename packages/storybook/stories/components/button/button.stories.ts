import type { StoryObj, Meta } from '@storybook/angular'
import type { StoryThemeObj } from '@mono/storybook/utils'

import { ButtonComponent } from '@mono/components/button'
import { LabelModule } from '@mono/components/label'
import { FieldModule } from '@mono/components/field'
import { CardModule } from '@mono/components/card'
import { LayoutModule } from '@mono/components/layout'

import { defineDefaultArgs } from '@mono/storybook/utils'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  ...defineDefaultArgs({  
    moduleMetadataOptions: {
      imports: [ LabelModule, FieldModule, CardModule, LayoutModule ]
    },
    render() {
      return {
        template: /*html */`
          <m-button>Click Me</m-button>        
        `
      }
    }
  })
} as Meta

type Story = StoryObj<StoryThemeObj & ButtonComponent>

export const Button: Story = {
  args: {
    variant: 'primary',
    disabled: false
  }
}