import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 56.25rem; /* 900px */
  margin-top: calc(var(--default-spacing) * 1.5);
`;

export const Word = styled.span`
  color: ${props => props.theme.primary};
  font-size: 20px;
  line-height: 1.5;

  &:not(:last-of-type) {
    margin-right: 1ch;
  }
`;

export const Letter = styled.span`

`;