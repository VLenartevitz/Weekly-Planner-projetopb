import {Label, LocalInput, LocalLabel, PosiForm, StyleInput} from './style.js'


const Input =({ type, text, name, placeholder, hadleOnChange, value}) =>{
    return(
        <PosiForm>
            <LocalLabel>
                <Label>{text}</Label>
            </LocalLabel>
            <LocalInput>
                <StyleInput 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder}
                onChange={hadleOnChange}
                value={value}>
                </StyleInput>
            </LocalInput>
        </PosiForm>
        
    );

}
export default Input;