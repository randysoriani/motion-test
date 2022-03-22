import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { BidInfo } from '../BidInfo';

import data from "../../data.json";

export function BidContainer(){
    const [isLinesOpen, setIsLinesOpen] = useState(false);
    const [isNewLineOpen, setIsNewLineOpen] = useState(false);
    const [newLineTotal, setNewLineTotal] = useState(0);

    const newLineQtyField = useRef<HTMLInputElement>(null);
    const newLineUnitPriceField = useRef<HTMLInputElement>(null);

    function calcLineTotal(){
        setNewLineTotal(Number(newLineQtyField?.current?.value) * Number(newLineUnitPriceField?.current?.value))
    }

    return(
        <Container>
            <article className="line">
                <BidInfo isLinesOpen={isLinesOpen} setIsLinesOpen={setIsLinesOpen} />
 
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
        </Container>
    )
}

const Container = styled.div`

`