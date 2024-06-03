import { Story } from './types'

export const ScrollableContent: Story = {
  args: {},
  render() {
    return {
      template: /* html */`
        <article>
          <header>Quick Links</header>
          <section>
            <ma-card>
              <ma-header>myLink</ma-header>
              <ma-content scrollable>
      
              </ma-content>
            </ma-card>
          </section>
        </article>
      `
    }
  }
}