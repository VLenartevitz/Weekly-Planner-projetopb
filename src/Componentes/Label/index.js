import { StyleLabel } from "./style.js";

const Label = (props) =>{
    return(
        <>
        <StyleLabel>{props.labelText}</StyleLabel>
        </>
    );
};
export default Label;