import styled from "styled-components";
import { TradingRow } from "../TradingRow";
import { TrandingRowExpanded } from "../TradingRowExpanded";

function FormatCurrency(value: number){
    return new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format( value / 100 )
}

export function TradingsContainer(){
    const trade = {
        holder: "Rico",
        inv_number: 1359098,
        tr_date: "2019-07-10",
        net: FormatCurrency(25),
        inv_total: FormatCurrency(95605),
    }

    return(
        <Container>
            <TradingRow trade={trade} />
            <TradingRow trade={trade} />
            <TradingRow trade={trade} />
            <TrandingRowExpanded />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`
