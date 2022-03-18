import styled from 'styled-components';
import {GlobalStyle} from './styles/global';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content{

  }

`


function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Hello</h1>
      </Container>
    </>
  )
}


export default App
