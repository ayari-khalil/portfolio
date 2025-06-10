/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0070f3',
          600: '#005ac2',
          700: '#004391',
          800: '#002d61',
          900: '#001630',
        },
        secondary: {
          50: '#f5e9fb',
          100: '#ead3f7',
          200: '#d6a7ef',
          300: '#c17be7',
          400: '#ad4fdf',
          500: '#9c27b0',
          600: '#7d1f8d',
          700: '#5d176a',
          800: '#3e0f46',
          900: '#1f0723',
        },
        accent: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00bcd4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        lab: {
          dark: '#0a0e17',
          light: '#f0f4f8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 112, 243, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 112, 243, 0.8)' },
        }
      },
    },
  },
  plugins: [],
};