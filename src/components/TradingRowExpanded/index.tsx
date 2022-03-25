import styled from 'styled-components';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import { useState } from 'react'

function FormatCurrency(value: number){
    return new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format( value / 100 )
}

export function TrandingRowExpanded(){
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Container>
            <div className="trading-info-expanded">
                <button className="icon-btn" onClick={()=>{setIsOpen(!isOpen)}} ><BsFillCaretDownFill /></button>
                
                <div>
                    <label htmlFor="">Holder:</label>
                    { isOpen ? 
                        <img src="/public/rico.png" alt="" className="holder-logo" />
                    :
                        null
                    }
                    { isOpen ? null : <p>Rico</p> }
                </div>

                <div>
                    <label htmlFor="">Invoice number:</label>
                    <p>15456454</p>
                </div>
                
                <div>
                    <label htmlFor="">Trading date:</label>
                    <p>2022-02-15</p>
                </div>
                
                <div>
                    <label htmlFor="">Taxes:</label>
                    <p>{FormatCurrency(65)}</p>
                </div>

                <div>
                    <label htmlFor="">Invoice total:</label>
                    <p>{FormatCurrency(95432)}</p>
                </div>

                { isOpen ? 
                    <div>
                        <input type="file" name="" id="" />
                    </div>
                : null }
                
                <div>
                    <button className="icon-btn" ><FiEdit2 /></button>
                    <button className="icon-btn" ><FiTrash /></button>
                </div>
            </div>




            { isOpen ?  
                <div className="expanded-lines">
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
                </div>
            : null }





        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: white;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    overflow: auto;
    display: flex;

    .holder-logo{
        width: 60px;
        border-radius: 50%;
    }

    .trading-info-expanded{
        display: grid;
        grid-template-columns: 2rem repeat(2, 1fr);
        grid-gap: 1rem;
        // align-items: center;
        // background: red;
    }

    .expanded-lines{
        margin-left: 1rem;
        border-left: 1px solid #545;
        padding-left: 1rem;
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