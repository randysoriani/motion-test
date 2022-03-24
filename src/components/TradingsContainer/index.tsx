import styled from "styled-components"
import { TradingRow } from "../TradingRow"

export function TradingsContainer(){

    function FormatCurrency(value: number){
        return new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format( value / 100 )
    }

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
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`
