module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        green: {
          light: '#E4FFF8',
          DEFAULT: '#2CB5A8',
          secondary: '#1DD679',
        },
        pink: {
          DEFAULT: '#D56C8C',
        },
        blue: {
          light: '#6CADDF',
          DEFAULT: '#3975C6',
        },
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#EEEEEE',
          dark: '#E6E6E6',
          secondary: '#AFAFAF',
          tertiary: '#646464',
        },
        orange: {
          DEFAULT: '#EF9D0E',
          dark: '#FF743C',
          thinner: '#FFBEA3',
        },
        black: {
          DEFAULT: '#000000DE',
          light: '#5A5C74',
          secondary: '#0000008A',
          disabled: '#00000042',
          tertiary: '#444',
          quaternary: '#353A40',
        },
        link: {
          DEFAULT: '#E59900',
        },
        red: {
          DEFAULT: '#F15044',
        },
        deactive: '#96DAD3',
        primary: {
          DEFAULT: '#2D3652',
          dark: '#6C7089',
          light: '#485784',
        },
        error: {
          DEFAULT: '#F44336',
        },
        line: {
          DEFAULT: '#1dcd00',
        },
        disabled: {
          DEFAULT: '#0000001F',
        },
        secondary: {
          DEFAULT: '#FFC700',
          dark: '#C29700',
          light: '#FFD43D',
        },
        chatBg: {
          DEFAULT: '#6C7089',
          isMe: '#6ED47C',
        },
        chatTxt: {
          DEFAULT: '#FFFFFF',
          isMe: '#212121',
        },
      },
      flex: { ...Array.from(Array(12 + 1)).map((_, i) => `${i} ${i} 0%`) }, // flex-1(flex: 1 1 0%), flex-2(flex: 2 2 0%), ..., flex-12(flex: 12 12 0%)
      fontFamily: {
        rounded: ["'M PLUS Rounded 1c'", 'sans-serif'],
      },
    },
  },
  variants: {
    accessibility: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    cursor: ['hover'],
    extend: {
      fontWeight: ['hover', 'focus', 'active'],
      textColor: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
