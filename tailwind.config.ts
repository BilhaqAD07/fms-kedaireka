import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'email-icon': "url('/public/email-isConciseBody.svg')",
      },
      colors: {
        primary_blue: '#1C5F7B', // primary color for the site (used in header)
        primary_dark: '#213140', // dark mode primary color
        secondary_dark: '#303030', // dark mode secondary color
      },
    },
  },
  plugins: [],
}
export default config
