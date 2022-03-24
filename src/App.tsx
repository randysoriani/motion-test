import styled from 'styled-components';

import { GlobalStyle } from './styles/global';
import { TradingsHeader } from './components/TradingsHeader';
import { TradingsContainer } from './components/TradingsContainer';

const Container = styled.div`
  width: 60rem;
  margin: auto;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
          <TradingsHeader />
          <TradingsContainer />
      </Container>
    </>
  )
}


export default App
