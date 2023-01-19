import {Label, LocalInput, LocalLabel, PosiLabel, StyleInput} from './style.js'


const Input =({ type, text, name, placeholder, hadleOnChange, value}) =>{
    return(
        <PosiLabel>
            <LocalLabel><Label>{text}</Label></LocalLabel>
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
        </PosiLabel>
        
    );

}
export default Input;