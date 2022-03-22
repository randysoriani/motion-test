import styled from 'styled-components';

import { GlobalStyle } from './styles/global';
import { BidHeader } from './components/BidHeader';

import { BidContainer } from './components/BidContainer';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content{
    width: 70rem;
    
    .header{
      
    }

    .summary{
      display: grid;
      grid-template-columns: 20px  repeat(5, 1fr);
      column-gap: 1rem;
      padding: .5rem;
    }

    .items-header{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    .detail-item{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    .items{
      height: 0;
      opacity: 0;
    }

    .toggle-button{
      background: none;
      border: none;
      color: white;        
    }

  }
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
