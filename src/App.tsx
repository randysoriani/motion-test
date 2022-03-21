import styled from 'styled-components';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isLinesOpen, setIsLinesOpen] = useState(false);
  const [isNewLineOpen, setIsNewLineOpen] = useState(false);
  const [newLineTotal, setNewLineTotal] = useState(0);
  const newLineQtyField = useRef<HTMLInputElement>(null);
  const newLineUnitPriceField = useRef<HTMLInputElement>(null);

  function calcLineTotal(){
    setNewLineTotal(Number(newLineQtyField?.current?.value) * Number(newLineUnitPriceField?.current?.value))
  }

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
                <motion.button className='toggle-button' onClick={()=>{setIsLinesOpen(!isLinesOpen)}}  initial="closed"
                  animate={isLinesOpen ? "opened" : "closed"}
                  variants={{ "opened": { rotate: '180deg' }, "closed": { rotate: '0deg'} }} >▼
                </motion.button>
                <p>6545654</p>
                <p>2352,00</p>
                <p>21/01/2021</p>
                <p>2,15</p>
                <p>2354,15</p>
              </div>
              
              <AnimatePresence initial={false}>
              {isLinesOpen && (
                <motion.div className="items" 
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.2 }}
                >
                  <div className="items-header">
                    <p>Ticker</p>
                    <p>Qty</p>
                    <p>Unit price</p>
                    <p>Total</p>
                    <button onClick={()=> {setIsNewLineOpen(true)}}>+ Add line</button>
                  </div>
                  <ul>
                    <li className='detail-item'>
                      <p>MXRF11</p>
                      <p>12</p>
                      <p>9,02</p>
                      <p>108.24</p>
                    </li>
                  </ul>
                  <AnimatePresence initial={false}>
                    {isNewLineOpen ? (
                      <motion.div className="new-line" key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.2 }}
                      >
                      <input type="text" placeholder='Ticker'  />
                      <input type="text" placeholder='Quantity' onChange={calcLineTotal} ref={newLineQtyField} />
                      <input type="text" placeholder='Unit price' onChange={calcLineTotal} ref={newLineUnitPriceField} />
                      <input type="text" placeholder='Total' value={newLineTotal} readOnly={true} />
                      <button onClick={()=>{setIsNewLineOpen(false); setNewLineTotal(0)}}>cancel</button>
                      <button>save</button>
                    </motion.div>
                    ): (
                      null
                    )}
                  </AnimatePresence>
                    
                </motion.div>
                )}
                </AnimatePresence>
            </article>


            <article className="line">
            
            <div className="summary">
              <button>v</button>
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
                <button>v</button>
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
