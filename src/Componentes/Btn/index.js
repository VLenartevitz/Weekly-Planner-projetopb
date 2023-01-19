import { StyleBtn } from "./style";
import { Link } from "react-router-dom";

const Btn = ( props, textButton ) =>{
    return (
        <Link to={props.path}><StyleBtn>{props.textButton}</StyleBtn></Link>
    );
};
export default Btn;