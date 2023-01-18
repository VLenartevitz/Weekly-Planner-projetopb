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

const Login = () =>{
    return(
        <Container>
            <WrapperEs> 
            <Title />
            <TextLogin></TextLogin>
                <PosiInput>
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
                    <Btn />
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