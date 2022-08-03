/**
 * settings.color
 *
 */
export default {
  background: true, text: true, link: false, custom: true, defaultPalette: true, customGradient: true, defaultGradients: true, customDuotone: true, defaultDuotone: true,
  palette: [
    {
      slug: 'light-gray-100', name: 'Light Gray 100',
      color: 'f9f9f9'
    }
  ],
  gradients: [
    {
      slug: 'blue-red', name: 'Blue Red',
      gradient: 'linear-gradient(135deg, #0000ff 0%, #ff0000 100%)'
    }
  ],
  duotone: [
    {
      slug: 'black-and-white', name: 'Black and White',
      colors: [ '#000', '#fff' ]
    }
  ],
}
