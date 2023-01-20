import styled from "styled-components";

export const TamIcone = styled.img`
    width: 3rem;
    transform:${(props) => props.movimento ? 'translateX(-40px)' : 'translateX(0px)'};
`