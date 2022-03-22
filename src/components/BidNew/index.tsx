import styled from "styled-components"

interface IBidNewProps{ 
    handleCloseNewBid: () => void;
}

export function BidNew({handleCloseNewBid}: IBidNewProps){
    return(
        <Container >
            <input type="text" placeholder='Doc number' />
            <input type="text" placeholder='Net price' />
            <input type="text" placeholder='Date' />
            <input type="text" placeholder='Taxes' />
            <input type="text" placeholder='Invoice net' />
            <button onClick={handleCloseNewBid}>Cancel</button>
            <button>Save</button>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`