import { Timer, Scroll } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return(
    <HeaderContainer>
      <h1>Timer</h1>
      <nav>
        <NavLink to="/">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="history">
        <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}