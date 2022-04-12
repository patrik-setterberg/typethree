import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 var(--default-spacing);
`

export const HeaderMessage = styled.span`
  text-align: center;
  color: ${props => props.theme.primary};
`