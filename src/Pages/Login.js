import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/PositionUol/style";
import { ImgUolStyle } from "../Componentes/ImgUol/styles";
import { WrapperEs } from "../Componentes/WrapperEs/style";
import Title from "../Componentes/Title/index.js";
import BtnLogin from '../Componentes/BtnLogin/index.js'
import TextLogin from "../Componentes/TextLogin";
import BtnVoltarCad from "../Componentes/BtnVoltarCad";
import IconeUser from "../Componentes/IconeUser";
import { LocalInput, PosiForm, PosiInput, StyleInput } from "../Componentes/Input";
import { useState } from "react";

const Login = () =>{

    const [movimento,setMovimento]=useState(false)

    return(
        <Container>
            <WrapperEs> 
            <Title titletext='To continue browsing safely, log in to the network.'/>
                <PosiInput>
                <TextLogin />
                <IconeUser movimentox={movimento}/>
                    <PosiForm>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='confirma senha'
                            placeholder='user name'
                            onChange={()=>{setMovimento(true)}}
                            />  
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='password'
                            placeholder='password'
                            />  
                        </LocalInput>
                    </PosiForm>
                     
                    <BtnLogin textButton='Log in'/>
                    <BtnVoltarCad path='/' textButton='voltar para a tela de Cadastro'/>
                </PosiInput>
            </WrapperEs>

            <LaptopImg>
                <PositionUol>
                    <ImgUolStyle src={logoUol}/>  
                </PositionUol>  
            </LaptopImg>
        </Container>
    );
}
export default Login;