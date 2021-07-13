import { createCss } from '@stitches/react';
import {
  gray,
  blue,
  red,
  green,
  crimson,
  violet,
  slate,
  tomato,
  pink,
  plum,
  slateDarkA,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';

export * from './button';

const { styled, theme, getCssString, global } = createCss({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...crimson,
      ...violet,
      ...slate,
      ...tomato,
      ...pink,
      ...plum,
      ...slateDarkA
    },
    space: {
      sm: "0.5rem"
    }
  },
});

const globalStyles = global({
  "@import": "url('https://rsms.me/inter/inter.css')",
  body: {
    margin: 0,
    fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  },
  html: {
    tabSsize: '4px',
    lineHeight: '1.15',
    '-webkit-text-size-adjust': '100%',
    fontFamily: "'Inter', sans-serif"
  },
  '@supports (font-variation-settings: normal)': {
    html: { fontFamily: "'Inter var', sans-serif" }
  },
  '*,&:after,&:before': {
      boxDizing: 'border-box',
      border: '0 solid'
  },
  hr: {
    height: 0,
    color: 'inherit'
  },

  'abbr[title]': {
      textDecoration: 'underline dotted'
  },

  'b,strong': {
      fontWeight: 'bolder'
  },

  'code,kbd,pre,samp': {
      fontFamily: 'ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
      fontSize: '1em'
  },

  small: {
      fontSize: '80%'
  },
  'blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre': {
    margin: 0
  },

  button: {
      backgroundColor: 'transparent',
      backgroundImage: 'none'
  },

  'fieldset,ol,ul': {
      margin: 0,
      padding: 0
  },

  'ol,ul': {
      listStyle: 'none'
  }

})

const darkTheme = theme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  }
});

export {
  styled,
  darkTheme,
  getCssString,
  globalStyles
}