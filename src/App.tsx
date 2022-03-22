import styled from 'styled-components';

import { GlobalStyle } from './styles/global';
import { BidHeader } from './components/BidHeader';

import { BidContainer } from './components/BidContainer';

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
          <BidHeader />
          <BidContainer />
      </Container>
    </>
  )
}


export default App
