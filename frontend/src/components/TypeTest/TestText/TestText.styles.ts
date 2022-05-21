import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Word = styled.span`
  color: ${props => props.theme.primary};

  &:not(:last-of-type) {
    margin-right: 1ch;
  }
`;

export const Letter = styled.span`

`;