import imgUser from '../../imgs/imgUser.svg'
import { TamIcone } from './style';

const IconeUser = (props) =>{
    return (
        <TamIcone src={imgUser} movimento={props.movimentox} /> 
    );
}
export default IconeUser;