import styled, { Theme } from "styled-components";
import media from "../../globals/media-breakpoints";

const PageTitle = styled.h1<{
  theme: Theme;
}>`
  color: ${({ theme }) => theme.primary};
  font-size: 1.25rem;
  text-align: center;
  padding-bottom: calc(var(--default-spacing) / 2);

  @media ${media.medium} {
    font-size: 1.5rem;
  }

  @media ${media.large} {
    font-size: 1.75rem;
  }
`;

export default PageTitle;
