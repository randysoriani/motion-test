import { useState } from "react";
import styled from "styled-components"
import { BidNew } from '../BidNew';

export function BidHeader(){
    const [isNewBidOpen, setIsNewBidOpen] = useState(false);

    return(
        <Container>
            <div className="header">
                <p>#</p>
                <p>Doc Number</p>
                <p>Net price</p>
                <p>Date</p>
                <p>Taxes</p>
                <p>Invoice Net</p>
                
                <button onClick={()=>{setIsNewBidOpen(!isNewBidOpen)}}>
                    {isNewBidOpen ? 'Cancel' : '+ New Bid'}
                </button>
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
    width: 100%;
    margin-bottom: 1rem;

    .header{
        display: grid;
        grid-template-columns: 4rem repeat(6, 1fr);
        column-gap: 1rem;
        justify-items: center;
        align-items: baseline;
        color: var(--gray-600);
    }

    button {
        background: #3398D5;
        border: none;
        color: white;
        padding: .5rem 1.5rem;
        border-radius: 0.25rem;
    }
    
`