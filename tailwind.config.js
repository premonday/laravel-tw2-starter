module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'brand': ['Inter', 'system-ui'],
      'body': ['Inter', 'system-ui'],
    }
,    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          'light': 'var(--color-primary-light)',
          'dark': 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          'light': 'var(--color-secondary-light)',
          'dark': 'var(--color-secondary-dark)',
        },
        bg: 'var(--color-bg)',
        lighter: 'var(--color-bg-lighter)',
        light: 'var(--color-bg-light)',
        dark: 'var(--color-bg-dark)',
        darker: 'var(--color-bg-darker)',
        high: 'var(--color-high)',
        body: 'var(--color-body)',
        border: 'var(--color-border)',
        black: 'var(--black)',
        white: 'var(--color-white)',
        shade: 'var(--color-shade)',
        transparent: 'var(--color-transparent)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'base': 'var(--space)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
      },
    },
    fontSize: {
      '3xl': 'var(--text-3xl)',
      '2xl': 'var(--text-2xl)',
      'xl': 'var(--text-xl)',
      'lg': 'var(--text-lg)',
      'md': 'var(--text-md)',
      'base': 'var(--text-base)',
      'sm': 'var(--text-sm)',
      'nav': 'var(--text-nav)',
      'xs': 'var(--text-xs)',
      'xxs': 'var(--text-xxs)',
    },
    borderColor: theme => ({
      DEFAULT: theme('colors.border', 'currentColor'),
      primary: theme('colors.primary'),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
