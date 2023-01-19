import { StyleBtn } from "./style";
import { Link } from "react-router-dom";

const Btn = ( props, textButton ) =>{
    return (
        <StyleBtn>{props.textButton}</StyleBtn>
    );
};
export default Btn;