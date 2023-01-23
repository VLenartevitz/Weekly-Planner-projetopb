import {Label, LocalInput, LocalLabel, PosiForm, StyleInput} from '../Input/style.js'


const Input =({ type,text, name, id, placeholder,value,hadleOnChange, onChange}) =>{

    return(
        <PosiForm>
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