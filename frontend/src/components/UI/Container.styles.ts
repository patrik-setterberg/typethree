import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: var(--content-width);
  padding: var(--default-spacing);
`

export const PageContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  padding: calc(var(--default-spacing) * 2) var(--default-spacing);
  color: ${props => props.theme.primary};
`