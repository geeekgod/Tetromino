import styled from "styled-components";
import bgImage from '../../img/stars.png'

export const StyledTetrisWrapper = styled.div`
width: 100vw;
height: 100vh;
background: url(${bgImage}), linear-gradient(#2b1055,#20489d);
background-size: cover;
overflow: auto;    
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`