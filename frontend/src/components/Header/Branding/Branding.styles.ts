import styled from "styled-components";

// temp branding :(
export const Branding = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primary};

  &:hover {
    & span:nth-child(2) {
      margin-left: 0.075em;
      margin-right: 0.075em;
    }

    & span:last-child {
    }
  }

  & span:first-child {
    letter-spacing: 0.5px;
  }

  & span:nth-child(2) {
    display: inline-block;
    padding-bottom: 0.125rem;
    color: ${(props) => props.theme.highlight};
    font-weight: 700;
    font-size: 1.1em;
    transition: all 0.2s ease-out;
  }

  & span:last-child {
    font-size: 0.9em;
    font-weight: 700;
  }

  & a,
  & a:visited {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
  }
`;
