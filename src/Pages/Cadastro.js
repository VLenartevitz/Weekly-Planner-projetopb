import React,{useState} from "react"
import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { ImgUolStyle } from "../Componentes/ImgUol/styles";
import { WrapperEs} from '../Componentes/WrapperEs/style.js';
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/PositionUol/style";
import Title from "../Componentes/Title/index.js";
import { LocalInput, PosiForm, PosiInput, StyleInput} from '../Componentes/Input/index.js'
import Btn from "../Componentes/Btn";
import BtnVoltarCad from '../Componentes/BtnVoltarCad/index.js'
import Label from "../Componentes/Label/index.js";
import { LocalLabel } from "../Componentes/Label/style";

const Cadastro = () =>{

    const [lastName,setUser,firstName,user,birthDate,country,city,email,password,confirmPassword]=useState({
        firstName:'',
        lastName:'',
        birthDate:'',
        country:'',
        city:'',
        email:'',
        password:'',
        confirmPassword:'',
    });

    const armazenar=(chave,valor) =>{
        localStorage.setItem(chave,valor)
    }


    return (
    <Container>
        <WrapperEs>
            <Title titletext='Please,register to continue'/>
                <PosiInput>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='first name'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='text'
                            name='primeiro nome'
                            placeholder='Your first name'
                            value={firstName}
                            onChange={(e)=>setUser(e.target.value)}
                            >
                            </StyleInput>
                        </LocalInput>
                    </PosiForm>
                    
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='last name'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='sobrenome'
                            placeholder='Your last name'
                            value={lastName}
                            onChange={(e)=>setUser(e.target.value)}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='birth date'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='nascimento'
                            placeholder='MM/DD/YYYY'
                            value={birthDate}
                            onChange={(e)=>setUser(e.target.value)}
                            />
                        </LocalInput>
                    </PosiForm>


                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='Country'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='Country'
                            placeholder='Your Country'
                            value={country}
                            onChange={(e)=>setUser(e.target.value)}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='City'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='cidade'
                            placeholder='Your City'
                            value={city}
                            onChange={(e)=>setUser(e.target.value)}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='e-mail'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            text='e-mail'
                            name='email'
                            placeholder='A valid e-mail here'
                            value={email}
                            onChange={(e)=>setUser(e.target.value)}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='password'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='senha'
                            placeholder='Your password'
                            value={password}
                            onChange={(e)=>setUser(e.target.value)}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='password'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='confirma senha'
                            placeholder='Confirm your password'
                            value={confirmPassword}
                            onChange={(e)=>setUser(e.target.value)}
                            />  
                        </LocalInput>
                    </PosiForm>
                    <Btn textButton='Register Now'  onClick={(e)=>armazenar('ls_name',firstName,lastName,birthDate,country,city,email,password,confirmPassword)}/>
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