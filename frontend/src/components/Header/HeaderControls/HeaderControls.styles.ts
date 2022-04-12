import styled from "styled-components";

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;

  & * + * {
    margin-left: var(--default-spacing);
  }
`