import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderControlsLink = styled(NavLink)`
  &.active svg {
    & path,
    & circle {
      fill: ${(props) => props.theme.primary};
    }
  }
`