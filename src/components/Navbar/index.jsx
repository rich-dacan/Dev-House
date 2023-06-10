import { NavHome } from "./styles";

function NavBar({ theme, children }) {
  return <NavHome theme={theme}>{children}</NavHome>;
}

export default NavBar;
