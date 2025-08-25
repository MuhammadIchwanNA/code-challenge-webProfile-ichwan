import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#fea903',
        'custom-green': '#c7e171',
        'custom-blue': '#e0eaff',
        'custom-pink': '#c77cff',
        'custom-cream': '#fffee0',
      },
      fontFamily: {
        'libre': ['Libre Franklin', 'sans-serif'],
        'mono': ['Red Hat Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
