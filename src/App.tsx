import styled from 'styled-components';
import {GlobalStyle} from './styles/global';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content{
    width: 70rem;
    .header{
      display: grid;
      grid-template-columns: 20px repeat(5, 1fr);
      column-gap: 1rem;
      color: var(--gray-600);
    }

    .summary{
      display: grid;
      grid-template-columns: 20px  repeat(5, 1fr);
      column-gap: 1rem;
    }

    .items{
      dipslay: inline-block;
      opacity: 0;
      transform: translateY(-4rem);
    }

    .items-header{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    .detail-item{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

  }
`


function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="content"> 
          <div className="header">
            <span></span>
            <p>Doc Number</p>
            <p>Net price</p>
            <p>Date</p>
            <p>Taxes</p>
            <p>Invoice Net</p>
          </div>
          <div className="lines">
            <article className="line">
              <div className="summary">
                <button>+</button>
                <p>6545654</p>
                <p>2352,00</p>
                <p>21/01/2021</p>
                <p>2,15</p>
                <p>2354,15</p>
              </div>
              <div className="items">
                <div className="items-header">
                  <p>Ticker</p>
                  <p>Qty</p>
                  <p>Unit price</p>
                  <p>Total</p>
                  <button>+ Add line</button>
                </div>
                <ul>
                  <li className='detail-item'>
                    <p>MXRF11</p>
                    <p>12</p>
                    <p>9,02</p>
                    <p>108.24</p>
                  </li>
                </ul>
              </div>
            </article>
            <article className="line">
              <div className="summary">
              <button>+</button>
                <p>6545654</p>
                <p>2352,00</p>
                <p>21/01/2021</p>
                <p>2,15</p>
                <p>2354,15</p>
              </div>
              <div className="items">
                <div className="items-header">
                  <p>Ticker</p>
                  <p>Qty</p>
                  <p>Unit price</p>
                  <p>Total</p>
                  <button>+ Add line</button>
                </div>
                <ul>
                  <li className='detail-item'>
                    <p>MXRF11</p>
                    <p>12</p>
                    <p>9,02</p>
                    <p>108.24</p>
                  </li>
                </ul>
              </div>
            </article>
            <article className="line">
              <div className="summary">
                <button>+</button>
                <p>6545654</p>
                <p>2352,00</p>
                <p>21/01/2021</p>
                <p>2,15</p>
                <p>2354,15</p>
              </div>
              <div className="items">
                <div className="items-header">
                  <p>Ticker</p>
                  <p>Qty</p>
                  <p>Unit price</p>
                  <p>Total</p>
                  <button>+ Add line</button>
                </div>
                <ul>
                  <li className='detail-item'>
                    <p>MXRF11</p>
                    <p>12</p>
                    <p>9,02</p>
                    <p>108.24</p>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}


export default App
