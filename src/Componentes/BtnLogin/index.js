import { StyleBtn } from "./style";
import { Link } from "react-router-dom";

const BtnLogin = ( props ) =>{
    return (
        <StyleBtn onClick={props.onClick}>{props.textButton}</StyleBtn>
    );
};
export default BtnLogin;