import React from "react"
import { styled } from "../"

type Props = {
  label: string,
}

const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  '[type=checkbox]:indeterminate': {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`,
    borderColor: 'transparent',
    backgroundColor: 'currentColor',
    backgroundSize: '100% 100%',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat'
  }
})

const CheckboxStyled = styled("input", {
    background: "#fff",
    appearance: 'none',
    height: '1rem',
    width: "1rem",
    border: '1px solid #333',
    '[type=checkbox]:indeterminate': {
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`,
      borderColor: 'transparent',
      backgroundColor: '#000',
      backgroundSize: '100% 100%',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat'
    }
})

const Checkbox: React.FC<Props> = ({label, ...props}) => {
  return (
    <Label>
      <CheckboxStyled type="checkbox" {...props}/>
      <span>{label}</span>
    </Label>
  )
}

export { Checkbox }