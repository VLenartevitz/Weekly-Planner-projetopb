import { Style } from "./style";
import {Link} from 'react-router-dom'


const BtnVoltarCad =(props, textButton)=>{
    return(
        <Link to={props.path}><Style>{props.textButton}</Style></Link>
    );
};
export default BtnVoltarCad;