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

    const [itemLocalStorage,setItemLocalStorage]=useState({
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
        localStorage.setItem(chave,JSON.stringify(valor))
        
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
                            value={itemLocalStorage.firstName}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, firstName: e.target.value})}
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
                            value={itemLocalStorage.lastName}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, lastName: e.target.value})}
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
                            value={itemLocalStorage.birthDate}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, birthDate: e.target.value})}
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
                            value={itemLocalStorage.country}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, country: e.target.value})}
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
                            value={itemLocalStorage.city}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, city: e.target.value})}
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
                            value={itemLocalStorage.email}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, email: e.target.value})}
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
                            value={itemLocalStorage.password}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, password: e.target.value})}
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
                            value={itemLocalStorage.confirmPassword}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, confirmPassword: e.target.value})}
                            />  
                        </LocalInput>
                    </PosiForm>
                    <Btn textButton='Register Now'  onClick={(e)=>armazenar('ls_name',itemLocalStorage)}/>
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