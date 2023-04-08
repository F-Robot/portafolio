import { load } from 'webfontloader'

export const loadFonts = () => {
  load({
    google: {
      families: ['Fira Code:300,400,500,600,700&display=swap'],
    },
  })
}
