import {Label, PosiLabel, StyleInput} from './style.js'


const Input =({ type, text, name, placeholder, hadleOnChange, value}) =>{
    return(
        <PosiLabel>
        <Label>{text}</Label>
        <StyleInput 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        onChange={hadleOnChange}
        value={value}>
        </StyleInput>
        </PosiLabel>
    );

}
export default Input;