import { Story } from './types'

export const Default = {
  args: {},
  render() {
    return {
      template: /* html */`
        <section>
          <m-label>Default Card</m-label>
          <m-card></m-card>
        </section>
      `,
      styles: [ /* scss */ `
        
      `]
    }
  }
} as Story