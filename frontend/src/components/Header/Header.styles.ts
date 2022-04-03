import styled from "styled-components";

import media from "../../globals/media-breakpoints";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundSecondary};
  padding: calc(var(--default-spacing) / 2) 3rem;

  & div {
    display: inline-block; // temppppppppp
  }
`;
