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
import { LocalInput, PosiFormLogin, PosiInput, StyleInput, StyleInputSenha } from "../Componentes/Input";
import { useState } from "react";
import IconeSenha from "../Componentes/IconeSenha";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () =>{
    const navigate = useNavigate()

    const [itemLocalStorageName,setItemLocalStorageName]=useState('');
    const [itemLocalStorageSenha,setItemLocalStorageSenha]=useState('');
    const {user,setUser}=useState();
    useEffect (()=>{
        const userStorage = localStorage.getItem('chave')
    if (userStorage){
        const hasUser = userStorage.hasOwnProperty('email')
        if (hasUser) setUser (hasUser[0])
    }
    })
    
    const validarDadosLogin =(user,password) =>{
        const dados = JSON.parse(localStorage.getItem('chave'))
        const hasUser = dados.hasOwnProperty('email')
        let fullName = dados.firstName + " " + dados.lastName
        if (hasUser === true) {
        if ((itemLocalStorageName !== fullName || itemLocalStorageName.firstName !== dados.email) && (itemLocalStorageSenha !== dados.password)) 
        {setUser({user,password})};
        return navigate('/Dashboard')
        
        } else return alert('nome incorreto') 
        }
        // let fullName = dados.firstName + " " + dados.lastName
        // if (itemLocalStorageName !== fullName || itemLocalStorageName.firstName !== dados.email) return alert('incorrect name')
        // if (itemLocalStorageSenha !== dados.password) return alert('incorrect password')
        // navigate('/Dashboard')}

    

    const [movimentouser,setMovimentouser]=useState(false)
    const [movimentosenha,setMovimentosenha]=useState(false)

    return(
        <Container>
            <WrapperEs> 
            <Title margintop={12.313} titletext='To continue browsing safely, log in to the network.' margintitle={true}/>
                <PosiInput>
                <TextLogin />
                    <PosiFormLogin>
                        <IconeUser movimentoxuser={movimentouser}/>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='user'
                            placeholder='user name'
                            value={itemLocalStorageName}
                            onChange={(e)=>{setItemLocalStorageName(e.target.value);setMovimentouser(true)}}
                            onFocus={()=>setMovimentouser(true)}
                            onBlur={()=> {if (itemLocalStorageName.length === 0) {setMovimentouser(false)}}}
                            />  
                        </LocalInput>
                    </PosiFormLogin>
                     <PosiFormLogin>
                     <IconeSenha movimentoxsenha={movimentosenha}/>
                        <LocalInput >
                            <StyleInputSenha
                            type='password'
                            name='password'
                            placeholder='password'
                            value={itemLocalStorageSenha}
                            onChange={(e)=>{setItemLocalStorageSenha(e.target.value);setMovimentosenha(true)}}
                            onFocus={()=>setMovimentosenha(true)}
                            onBlur={()=> {if (itemLocalStorageSenha.length === 0) {setMovimentosenha(false)}}}
                            />  
                        </LocalInput>
                    </PosiFormLogin> 
                     
                    <BtnLogin textButton='Log in' onClick={validarDadosLogin}/>
                    <BtnVoltarCad path='/' textButton='Back to registration screen'/>
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