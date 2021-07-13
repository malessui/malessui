import { styled } from "../index"
import _variants from "./_variants"
import _colors from "./_colors"
import _sizes from "./_sizes"
import _rounded from "./_rounded"
import { compoundVariants } from "./_variants"

console.log(JSON.stringify(compoundVariants, null, 2))

const Button = styled('button', {
  $$baseColor: '$gray12',
  position: 'relative',
  whiteSpace: 'nowrap',
  border: '1px solid transparent',
  boxShadow: '0 2px #00000004',
  transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
  userSelect: 'none',
  paddingLeft: "1rem",
  paddingRight: "1rem",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  height: '2rem',
  borderRadius: '0.25rem',
  borderColor: '$gray6',
  color: '$$baseColor',
  background: '#fff',
  cursor: "pointer",
  '&:hover': {
    borderColor: '$blue11',
    color: '$blue9',
  },
  variants: {
    variant: _variants,
    color: _colors,
    size: _sizes,
    rounded: _rounded
  },
  compoundVariants,
});

export { Button }