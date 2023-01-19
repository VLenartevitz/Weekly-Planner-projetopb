import styled from "styled-components";


export const Label = styled.label`
    color: #E0E0E0;
    display: flex;
    margin-right: 2em;
`
export const StyleInput = styled.input`
    height: 3.75rem;
    width: 23.688rem;
    border-radius: 3.125rem;
    background-color: #26292C;
    border-color:#FFFFFF;
    margin-top: 1.125rem;
    &::placeholder{
        color: white;
        display: flex;
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
    margin-top: 4.188rem;
    
`
export const PosiLabel = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const LocalInput = styled.div`
    justify-content: flex-end;
`
export const LocalLabel = styled.div`
    justify-content: flex-start;
`