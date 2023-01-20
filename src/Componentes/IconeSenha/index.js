import imgSenha from '../../imgs/imgSenha.svg'
import { TamIcone } from './style';

const IconeSenha = (props) =>{
    return (
        <TamIcone src={imgSenha} movimentosenha={props.movimentoxsenha} /> 
    );
}
export default IconeSenha;