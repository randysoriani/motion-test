import { motion } from "framer-motion"
import styled from "styled-components"

interface IBidInfoProps{
    isLinesOpen: Boolean;
    setIsLinesOpen: (arg0: boolean) => void
}

export function BidInfo({isLinesOpen, setIsLinesOpen}: IBidInfoProps){
    return(
        <Container>
            <motion.button className='toggle-button' onClick={()=>{setIsLinesOpen(!isLinesOpen)}}  initial="closed"
                animate={isLinesOpen ? "opened" : "closed"}
                variants={{ "opened": { rotate: '180deg' }, "closed": { rotate: '0deg'} }} >▼
            </motion.button>
            <p>6545654</p>
            <p>2352,00</p>
            <p>21/01/2021</p>
            <p>2,15</p>
            <p>2354,15</p>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 20px repeat(6, 1fr);
    column-gap: 1rem;
    color: var(--gray-600);
`