import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/PositionUol/style";
import { ImgUolStyle } from "../Componentes/ImgUol/styles";
import { WrapperEs } from "../Componentes/WrapperEs/style";
import Title from "../Componentes/Title/index.js";
import Input from "../Componentes/Input/index.js";
import {PosiInput, StyleInput} from '../Componentes/Input/style.js'
import Btn from "../Componentes/Btn";
import TextLogin from "../Componentes/TextLogin";
import BtnVoltarCad from "../Componentes/BtnVoltarCad";
import IconeUser from "../Componentes/IconeUser";

const Login = () =>{
    return(
        <Container>
            <WrapperEs> 
            <Title text='To continue browsing safely, log in to the network.'/>
                <PosiInput>
                <TextLogin />
                     <Input
                     type='text'
                     
                     name='primeiro nome'
                     placeholder='user name'
                     />
                     <Input
                     type='text'
                     
                     name='primeiro nome'
                     placeholder='password'
                     />
                     <IconeUser></IconeUser>
                    <Btn textButton='Log in'/>
                    <BtnVoltarCad path='/' textButton='voltar para a tela de login'/>
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