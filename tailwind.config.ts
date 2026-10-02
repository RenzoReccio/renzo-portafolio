/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--color-paper)",
          2: "var(--color-paper-2)",
          3: "var(--color-paper-3)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          2: "var(--color-ink-2)",
        },
        rule: {
          DEFAULT: "var(--color-rule)",
          2: "var(--color-rule-2)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          cyan: "var(--color-accent-2)",
          coral: "var(--color-accent-3)",
          mint: "var(--color-mint)",
          lavender: "var(--color-lavender)",
          ink: "var(--color-accent-ink)",
        },
        apple: {
          canvas: {
            light: '#f5f5f7',
            dark: '#000000',
          },
          surface: {
            light: '#ffffff',
            dark: '#161617',
            elevated: '#1c1c1e',
          },
          border: {
            light: 'rgba(0, 0, 0, 0.08)',
            dark: 'rgba(255, 255, 255, 0.10)',
          },
          subtle: '#86868b',
          blue: {
            DEFAULT: '#0071e3',
            hover: '#0077ed',
          },
        },
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'Geist Mono',
          'ui-monospace',
          'monospace',
        ],
      },
      borderRadius: {
        card: 'var(--radius-card, 20px)',
        pill: 'var(--radius-pill, 9999px)',
        input: 'var(--radius-input, 12px)',
      },
      transitionTimingFunction: {
        'ui-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ui-snap': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'apple-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-snappy': 'cubic-bezier(0.2, 0.9, 0.2, 1)',
      },
      boxShadow: {
        'ui-card': '0 12px 32px -16px oklch(20% 0.012 250 / 0.14), 0 1px 2px oklch(20% 0.012 250 / 0.06)',
        'ui-hover': '0 24px 56px -20px oklch(20% 0.012 250 / 0.20), 0 2px 6px oklch(20% 0.012 250 / 0.08)',
        'apple-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'apple-card': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'apple-float': '0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'apple-dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
