import imgUser from '../../imgs/imgUser.svg'
import { TamIcone } from './style';

const IconeUser = (props) =>{
    return (
        <TamIcone src={imgUser} movimentouser={props.movimentoxuser} /> 
    );
}
export default IconeUser;