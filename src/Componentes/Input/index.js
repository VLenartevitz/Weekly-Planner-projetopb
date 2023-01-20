import styled from "styled-components";

export const StyleInput = styled.input`
    height: 3.75rem;
    width: 23.688rem;
    border-radius: 3.125rem;
    background-color: #26292C;
    border-color: white;
    margin-top: 1.125rem;
    &::placeholder{
        display: flex;
        color: white;
        font-size: 12px;
        line-height: 15px;
        color: #E0E0E0;
        padding-left:3rem;
    }
`
export const PosiInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    
`
export const PosiForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    width: 471px;
    `

export const LocalInput= styled.div`
    justify-content:flex-end ;
`
