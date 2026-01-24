/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Droid Serif', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f9f5f0',
        },
        rose: {
          50: '#fef5f3',
          100: '#fde8e4',
          200: '#fbd4cd',
          300: '#f5b5aa',
          400: '#ed9184',
          500: '#d97b6f',
          600: '#c06b60',
          700: '#a05850',
        },
        dusty: {
          100: '#f5e6e0',
          200: '#e8cfc5',
          300: '#d9b8aa',
          400: '#c9a08e',
          500: '#b98976',
          600: '#a07260',
        },
        sage: {
          100: '#f0f4f0',
          500: '#84a584',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(217, 123, 111, 0.1), 0 2px 4px -1px rgba(217, 123, 111, 0.06)',
        'medium': '0 10px 15px -3px rgba(217, 123, 111, 0.1), 0 4px 6px -2px rgba(217, 123, 111, 0.05)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      screens: {
        'xs': '475px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: theme('colors.rose.500'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.full'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'scale(1)',
          '&:hover': {
            backgroundColor: theme('colors.rose.600'),
            transform: 'scale(1.05)',
          },
        },
        '.product-card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          overflow: 'hidden',
          boxShadow: theme('boxShadow.md'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: theme('boxShadow.lg'),
            transform: 'translateY(-4px)',
          },
        },
        '.section-padding': {
          paddingTop: theme('spacing.16'),
          paddingBottom: theme('spacing.16'),
          '@screen md': {
            paddingTop: theme('spacing.20'),
            paddingBottom: theme('spacing.20'),
          },
        },
      });
      
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.bg-gradient-radial': {
          'background-image': 'radial-gradient(var(--tw-gradient-stops))',
        },
      });
    },
  ],
}