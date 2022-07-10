import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderMessage = styled.span`
  padding: 0 var(--default-spacing);
  color: ${props => props.theme.primary};
  text-align: center;
  opacity: 0; // TEMP.
`