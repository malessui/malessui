import { initColors } from "./_colors"

const initVariants: any = {
  solid: {
    name: 'solid',
    bg: 9,
    borderColor: 'transparent',
    text: null,
    textColor: 1,
  },
  light: {
    name: 'light',
    bg: 4,
    borderColor: 'transparent',
    text: null,
    textColor: 10,
  },
  ghost: {
    name: 'ghost',
    bg: 0,
    borderColor: 'transparent',
    text: null,
    textColor: 10,
  },
  link: {
    name: 'link',
    bg: 13,
    borderColor: 'transparent',
    text: 'underline',
    textColor: 10,
  },
}

// {
//   variant: 'link',
//   color: 'primary',
//   css: {
//     background: 'transparent',
//     color: '$blue9',
//     borderColor: 'transparent'
//   }
// },

const variantsColors: any[] = []

Object.keys(initVariants).map(variantKey => {
  Object.keys(initColors).map(colorKey => {
    variantsColors.push({
      variant: variantKey,
      color: colorKey,
      css: {
        background: `$${initColors[colorKey].name}${initVariants[variantKey].bg}`,
        color: `$${initColors[colorKey].name}${initVariants[variantKey].textColor}`,
        borderColor: initVariants[variantKey].borderColor,
        '&:hover': {
          background: `$${initColors[colorKey].name}${initVariants[variantKey].bg + 2}`,
          color: `$${initColors[colorKey].name}${initVariants[variantKey].textColor}`,
          borderColor: initVariants[variantKey].borderColor,
        }
      }
    })
  })
})

const variants = {
  solid: {
    '&:hover': {
      background: '$slate6',
      borderColor: 'transparent',
      color: '$$baseColor'
    }
  },
  light: {
    borderColor: 'transparent',
    '&:hover': {
      background: '$slate4',
      borderColor: 'transparent',
      color: '$$baseColor'
    }
  },
  ghost: {
    background: "transparent",
    borderColor: 'transparent',
    '&:hover': {
      background: '$slate4',
      borderColor: 'transparent',
      color: '$$baseColor'
    }
  },
  link: {
    background: "transparent",
    borderColor: 'transparent',
    '&:hover': {
      textDecoration: 'underline',
      borderColor: 'transparent',
      color: '$$baseColor'
    }
  },
}

export const compoundVariants = variantsColors

export default variants