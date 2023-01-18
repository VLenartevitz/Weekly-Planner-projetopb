import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/PositionUol/style";
import { ImgUolStyle } from "../Componentes/ImgUol/styles";
import { WrapperEs } from "../Componentes/WrapperEs/style";
import Title from "../Componentes/Title";

const Home = () =>{
    return(
        <Container>
            <WrapperEs> 
                <Title/>
            </WrapperEs>

            <LaptopImg>
                <PositionUol>
                    <ImgUolStyle src={logoUol}/>  
                </PositionUol>  
            </LaptopImg>
        </Container>
    );
}
export default Home;