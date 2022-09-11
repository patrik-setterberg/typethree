import styled, { Theme } from "styled-components";

const PageTagline = styled.span<{
  theme: Theme;
}>`
  color: ${({ theme }) => theme.primary};
  margin-bottom: calc(var(--default-spacing) * 2);
`;

export default PageTagline;
