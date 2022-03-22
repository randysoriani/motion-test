import { useState } from "react";
import styled from "styled-components"
import { BidNew } from '../BidNew';

export function BidHeader(){
    const [isNewBidOpen, setIsNewBidOpen] = useState(true);

    return(
        <Container>
            <div className="header">
                <span></span>
                <p>Doc Number</p>
                <p>Net price</p>
                <p>Date</p>
                <p>Taxes</p>
                <p>Invoice Net</p>
                
                <button onClick={()=>{setIsNewBidOpen(!isNewBidOpen)}}>+ New Bid</button>
            </div>
            {isNewBidOpen ? 
                <BidNew handleCloseNewBid={()=>{setIsNewBidOpen(false)}} /> 
            : 
                null
            }
        </Container>
    )
}

const Container = styled.div`
    .header{
        display: grid;
        grid-template-columns: 20px repeat(6, 1fr);
        column-gap: 1rem;
        color: var(--gray-600);
    }
`