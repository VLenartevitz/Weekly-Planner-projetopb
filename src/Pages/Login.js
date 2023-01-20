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
import { LocalInput, PosiFormLogin, PosiInput, StyleInput } from "../Componentes/Input";
import { useState } from "react";
import IconeSenha from "../Componentes/IconeSenha";

const Login = () =>{

    const [movimentouser,setMovimentouser]=useState(false)
    const [movimentosenha,setMovimentosenha]=useState(false)

    return(
        <Container>
            <WrapperEs> 
            <Title titletext='To continue browsing safely, log in to the network.'/>
                <PosiInput>
                <TextLogin />
                    <PosiFormLogin>
                        <IconeUser movimentoxuser={movimentouser}/>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='confirma senha'
                            placeholder='user name'
                            onChange={()=>{setMovimentouser(true)}}
                            />  
                        </LocalInput>
                    </PosiFormLogin>
                     <PosiFormLogin>
                     <IconeSenha movimentoxsenha={movimentosenha}/>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='password'
                            placeholder='password'
                            onChange={(e)=>{setMovimentosenha(e.target.value)}}
                            />  
                        </LocalInput>
                    </PosiFormLogin> 
                     
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