import styled from "styled-components";

import media from "../../globals/media-breakpoints";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.backgroundSecondary};
  padding: var(--default-spacing);

  & div {
    // temppppppppp stuff
    display: flex;
    align-items: center;
    color: ${props => props.theme.primary};

    &:first-of-type {
      margin-right: auto;
    }
  }

  & section {
    // probably temp
    display: flex;
    justify-content: space-between;
  }

  @media ${media.atleastMedium} {
    padding-left: 0;
    padding-right: 0;
  }
`;