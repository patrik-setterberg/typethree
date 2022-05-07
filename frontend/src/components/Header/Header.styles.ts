import styled from "styled-components";

import media from "../../globals/media-breakpoints";
import { Container } from "../UI/Container.styles";
import { Branding } from "./Branding/Branding.styles";
import { HeaderControls } from "./HeaderControls/HeaderControls.styles";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.backgroundFourthenary};

  // Center middle element (Header message).
  & ${Container} {
    justify-content: space-between;
    padding: var(--default-spacing);

    & ${Branding}, & ${HeaderControls} {
      flex-grow: 1;
      flex-basis: 0;
    }

    & ${HeaderControls} > *:first-child {
      margin-left: auto;
    }
  }

  @media ${media.atleastMedium} {
    & ${Container} > *:first-child {
      margin-left: var(--default-spacing);
    }

    & ${Container} > *:last-child {
      margin-right: var(--default-spacing);
    }
  };
`;
