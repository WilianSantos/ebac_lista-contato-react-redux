import { Inputs } from './styles'

type InputProps = {
  placeholder: string
  type: string
  value?: string
}

const Input = ({ placeholder, type }: InputProps) => (
  <Inputs placeholder={placeholder} type={type} />
)

export default Input
