import { HeaderContent, SpanOne, SpanTwo } from "./styleHeader"
import logoTodo from '../../assets/rocket.svg'

export function Header() {
    return (
      <HeaderContent>
        <img src={logoTodo} alt="" />
        <SpanOne>to</SpanOne>
        <SpanTwo>do</SpanTwo>
      </HeaderContent>
    )
  }
  