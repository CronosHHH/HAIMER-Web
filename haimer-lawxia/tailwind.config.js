module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: 'var(--palette-primaryBackground)',
        contentBackground: 'var(--palette-contentBackground)',
        textPrimary: 'var(--palette-textPrimary)',
        textSecondary: 'var(--palette-textSecondary)',
        textTertiary: 'var(--palette-textTertiary)',
        interactiveBlue: 'var(--palette-interactiveBlue)',
        interactiveBlueHover: 'var(--palette-interactiveBlueHover)',
        textButtonPrimary: 'var(--palette-textButtonPrimary)',
        componentSubtle: 'var(--palette-componentSubtle)',
        componentSubtleHover: 'var(--palette-componentSubtleHover)',
        borderSubtle: 'var(--palette-borderSubtle)',
        focusRing: 'var(--palette-focusRing)',
      },
      borderRadius: {
        pill: 'var(--effects-borderRadius-pill)',
        medium: 'var(--effects-borderRadius-medium)',
        large: 'var(--effects-borderRadius-large)',
      },
      backgroundImage: {
        'greeting-text': 'var(--gradients-greetingText)',
        'gemini-logo': 'var(--gradients-geminiLogo)',
        'pro-badge': 'var(--gradients-proBadge)',
      },
      boxShadow: {
        none: 'var(--effects-shadows-none)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 