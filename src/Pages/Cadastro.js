import React from "react"
import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg'
import { ImgUolStyle } from "../Componentes/ImgUol/styles";
import {InputCadastro} from '../Componentes/InputCadastro/index.js'
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/PositionUol/style";

const Cadastro = () =>{
    return (
    <Container>
        <InputCadastro>
            
        </InputCadastro>

        <LaptopImg>
            <PositionUol>
                <ImgUolStyle src={logoUol}/>  
            </PositionUol>  
        </LaptopImg>
    </Container>
    );
}

export default Cadastro;