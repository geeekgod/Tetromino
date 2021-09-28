import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px 10px;
  border: 4px solid rgba(277, 277, 277,0.8);
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: rgb(25, 5, 34);
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`