import React,{useState} from "react"
import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { ImgUolStyle } from "../Componentes/ImgUol/styles";
import { WrapperEs} from '../Componentes/WrapperEs/style.js';
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/PositionUol/style";
import Title from "../Componentes/Title/index.js";
import Input from "../Componentes/Input/index.js";
import {PosiInput, StyleInput} from '../Componentes/Input/style.js'
import Btn from "../Componentes/Btn";
import { Link } from "react-router-dom";
import BtnVoltarCad from '../Componentes/BtnVoltarCad/index.js'

const Cadastro = () =>{

    const [name,setName]=useState('')

    const armazenar=(chave,valor) =>{
        localStorage.setItem(chave,valor)
        console.log('teste')
    }
    React.useEffect(()=>{
        console.log('teste')
    },[])


    return (
    <Container>
        <WrapperEs>
            <Title titletext='Please,register to continue'/>
                <PosiInput>
                     <Input
                     type='text'
                     text='first name'
                     name='primeiro nome'
                     placeholder='Your first name'
                     value={name}
                     onChange={(e)=>armazenar('namestore',e.target.value)}
                     />
                     <Input
                     type='text'
                     text='last name'
                     name='sobrenome'
                     placeholder='Your last name'
                     />
                     <Input
                     type='text'
                     text='birth date'
                     name='nascimento'
                     placeholder='MM/DD/YYYY'
                     />
                     <Input
                     type='text'
                     text='Country'
                     name='Country'
                     placeholder='Your Country'
                     />
                     <Input
                     type='text'
                     text='City'
                     name='cidade'
                     placeholder='Your City'
                     />
                     <Input
                     type='text'
                     text='e-mail'
                     name='email'
                     placeholder='A valid e-mail here'
                     />
                     <Input
                     type='text'
                     text='password'
                     name='senha'
                     placeholder='Your password'
                     />
                     <Input
                     type='text'
                     text='password'
                     name='confirma senha'
                     placeholder='Confirm your password'
                     /> 
                    <Btn  textButton='Register Now' onClick={armazenar('ls_nome',name)}/>
                    <BtnVoltarCad path='/Login' textButton='Ja tem cadastro?faça login'/>
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

export default Cadastro;