import styled from "styled-components";

export const Wrapper = styled.div`

`

// temp branding
export const Branding = styled.span`
  display: flex;
  align-items: center;
  color: ${props => props.theme.primary};

  & span:nth-child(2) {
    display: inline-block;
    padding-bottom: 0.125rem;
    color: ${props => props.theme.highlight};
    font-weight: 700;
    font-size: 1.1em;
  }

  & span:last-child {
    font-size: 0.9em;
    font-weight: 600;
  }
`