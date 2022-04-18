import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: var(--content-width);
  padding: var(--default-spacing);
`

export const PageContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  padding-top: calc(var(--default-spacing) * 1.5);
`