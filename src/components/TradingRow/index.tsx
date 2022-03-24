import { useState } from "react";
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion";

import { FiEdit2, FiTrash} from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs";

interface ITradingRowProps{
    trade:{
        holder: string;
        inv_number: number;
        tr_date: string;
        net: string;
        inv_total: string;
    }
}

export function TradingRow({trade}: ITradingRowProps){
    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <Container>

                <div className="trading-info">
                    <button className="icon-btn" onClick={()=>{setIsExpanded(!isExpanded)}}><BsFillCaretDownFill /></button>
                    <p>{trade.holder}</p>
                    <p>{trade.inv_number}</p>
                    <p>{trade.tr_date}</p>
                    <p>{trade.net}</p>
                    <p>{trade.inv_total}</p>
                    <div>
                        <button className="icon-btn" ><FiEdit2 /></button>
                        <button className="icon-btn" ><FiTrash /></button>
                    </div>
                </div>
                <AnimatePresence>
                {isExpanded ? (
                    <motion.div 
                        className="lines"
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        layout
                        variants={{
                            open: { opacity: 1, height: "auto"},
                            collapsed: { opacity: 0, height: 0}
                        }}
                        transition={{
                            duration: 0.2 }
                        }
                    >
                        <div className="lines-header">
                            <p>Ticker</p>
                            <p>Quantity</p>
                            <p>Unit price</p>
                            <p>Transaction type</p>
                            <button>Add line</button>
                        </div>
                        <div className="new-line-form">
                            {/* TODO:: add form to create a new trading line */}
                        </div>
                        <div className="line">
                            <p>BBPO11</p>
                            <p>2</p>
                            <p>14765</p>
                            <p>Debit</p>
                            <div>
                                <button className="icon-btn" ><FiEdit2 /></button>
                                <button className="icon-btn" ><FiTrash /></button>
                            </div>
                        </div>
                        <div className="line">
                            <p>SDIL11</p>
                            <p>3</p>
                            <p>11001</p>
                            <p>Debit</p>
                            <div>
                                <button className="icon-btn" ><FiEdit2 /></button>
                                <button className="icon-btn" ><FiTrash /></button>
                            </div>
                        </div>
                        <div className="line">
                            <p>XPML11</p>
                            <p>3</p>
                            <p>11014</p>
                            <p>Debit</p>
                            <div>
                                <button className="icon-btn" ><FiEdit2 /></button>
                                <button className="icon-btn" ><FiTrash /></button>
                            </div>
                        </div>
                    </motion.div>
                ) : null }
                </AnimatePresence>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: white;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    max-height: 15rem;
    overflow: auto;

    .trading-info{
        display: grid;
        grid-template-columns: 4rem repeat(6, 1fr);
        grid-gap: 1rem;
        align-items: center;
    }

    .lines{
        margin: 0.25rem;
        padding: 1rem;
        border-radius: 0.25rem;
        border: 1px solid var(--gray-400);
    }

    .lines-header{
        display: grid;
        grid-template-columns: repeat(4, 2fr) 1fr;
        grid-gap: 1rem;
        align-items: center;
        font-size: .7rem;
        font-weight: 600;
        color: #565656;
        text-transform: uppercase;
    }

    .line{
        display: grid;
        grid-template-columns: repeat(4, 2fr) 1fr;
        grid-gap: 1rem;
        align-items: center;
        margin-top: 0.5rem;
    }

    .icon-btn{
        border: none;
        background: none;
        color: #546456;
        margin-right: 0.5rem;
        transition: color 0.2s;

        &:hover{
            color: #223141;
        }

        svg{
            width: 1.2rem;
            height: 1.2rem;
        }
    }    
`