import styled from "styled-components";

export const HeaderControls = styled.div`
  display: flex;

  & div + div {
    margin-left: var(--default-spacing);
  }
`