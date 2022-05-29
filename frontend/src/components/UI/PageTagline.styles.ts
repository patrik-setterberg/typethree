import styled from "styled-components";
import media from "../../globals/media-breakpoints";

const PageTagline = styled.span`
  color: ${props => props.theme.primary};
  margin-bottom: calc(var(--default-spacing) * 2);
`

export default PageTagline;