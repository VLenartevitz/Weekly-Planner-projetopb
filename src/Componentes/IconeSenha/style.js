import styled from "styled-components";

export const TamIcone = styled.img`
    width: 3rem;
    transform:${(props) => props.movimentosenha ? 'translateX(-100px)' : 'translateX(0px)'};
    display: flex;
    margin: 0%;
    width: 40px;
    height: 40px;
    transition: 1s;
    
`