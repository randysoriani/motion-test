import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components"

export function TradingsHeader(){
    const [isNewTradingOpen, setIsNewTradingOpen] = useState(false);

    return(
        <Container>
            <header>
                <p>#</p>
                <p>Holder</p>
                <p>Invoice number</p>
                <p>Trading date</p>
                <p>Net value</p>
                <p>Invoice total</p>
                <button className="text-btn" onClick={()=>{setIsNewTradingOpen(!isNewTradingOpen)}} >
                    { isNewTradingOpen ? 'Cancel' : 'New trading' }
                </button>
            </header>

            <AnimatePresence initial={false}>
                {isNewTradingOpen ?
                    <motion.div 
                        className="new-trading-form"
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        layout={true}
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{
                            duration: 0.2 }
                        }
                    >
                        <div>
                            <label htmlFor="holder">Holder:</label>
                            <input type="text" placeholder='Holder' id="holder" />
                        </div>
                        <div>
                            <label htmlFor="holder">Invoice:</label>
                            <input type="text" placeholder='Invoice' id="invoice" />
                        </div>
                        <div>
                            <label htmlFor="trading_date">Trading date:</label>
                            <input type="text" placeholder='Trading date' id="trading_date" />
                        </div>
                        <div>
                            <label htmlFor="net_value">Net value:</label>
                            <input type="text" placeholder='Net value' id="net_value" />
                        </div>
                        
                        <div>
                            <label htmlFor="invoice_total">Invoice total:</label>
                            <input type="text" placeholder='Invoice total' id="invoice_total" />
                        </div>
                        <button className="text-btn">Add</button>
                    </motion.div>
                :   
                    null 
                }
             </AnimatePresence>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    label{
        display: block;
        color: var(--gray-900);
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }

    .text-btn{
        background: #3398D5;
        border: none;
        color: white;
        padding: .5rem 1.5rem;
        border-radius: 0.25rem;
    }

    header{
        display: grid;
        grid-template-columns: 4rem repeat(6, 1fr);
        grid-gap: 1rem;
        margin-bottom: 1rem;
        align-items: center;
    }

    .new-trading-form{
        border-radius: 0.25rem;
        background: white;
        padding: 1rem;
        margin-bottom: 1rem;
        display: grid;
        grid-template-columns: 4rem repeat(4, 1fr);
        grid-gap: 1rem;
    }
`