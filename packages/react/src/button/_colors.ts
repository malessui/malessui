export const initColors: any = {
  primary: {
    name: 'blue',
    bg: 9,
    text: 9,
    borderColor: 11
  },
  tomato: {
    name: 'tomato',
    bg: 9,
    text: 9,
    borderColor: 11
  },
  red: {
    name: 'red',
    bg: 9,
    text: 9,
    borderColor: 11
  },
  crimson: {
    name: 'crimson',
    bg: 9,
    text: 9,
    borderColor: 11
  },
  pink: {
    name: 'pink',
    bg: 9,
    text: 9,
    borderColor: 11
  },
  plum: {
    name: 'plum',
    bg: 9,
    text: 9,
    borderColor: 11
  },
  violet: {
    name: 'violet',
    bg: 9,
    text: 9,
    borderColor: 11
  },
  
}

const colors: any = Object.keys(initColors).map(key => ({
  [key]: {
    color: `$${initColors[key].name}${initColors[key].text}`,
    borderColor: `$${initColors[key].name}${initColors[key].borderColor}`,
    '&:hover': {
      color: `$${initColors[key].name}${initColors[key].text + 2}`,
      borderColor: `$${initColors[key].name}${initColors[key].borderColor}`,
    }
  }
}))

export default Object.assign({}, ...colors)