 tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          mono: ['"JetBrains Mono"', 'monospace'],
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          brand: { 50:'#eafcf1', 500:'#1fae5e', 600:'#16A34A', 400:'#22C55E' },
          amber: { 400:'#F5B942' },
        },
        keyframes: {
          blink: { '0%,49%': { opacity: 1 }, '50%,100%': { opacity: 0 } },
          rise: { '0%': { opacity:0, transform:'translateY(14px)' }, '100%': { opacity:1, transform:'translateY(0)' } },
        },
        animation: {
          blink: 'blink 1s step-start infinite',
          rise: 'rise .6s ease-out both',
        }
      }
    }
  }