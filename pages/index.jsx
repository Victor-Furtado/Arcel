import { Fragment } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Logo = styled(Image).attrs({
    src: "/images/Logo.png",
    //layout: "",
    width: 752,
    height: 772,
    alt: "Logo Arcel"
})``

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: ${props => (props.size || 1)}
    justify-content: ${props => (props.justifyContent || 'center')}
    align-items: ${props => (props.alignItems || 'center')};
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => (props.justifyContent || 'center')}
    align-items: ${props => (props.alignItems || 'center')};
    flex: ${props => (props.size || 1)}
`

const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    text-align: 'center';
`

const Button = styled.button`
    margin-top: 0.5rem;
    background-color: #76d6c0;
    border: none;
    color: white;
    padding: 10px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: ease background-color 250ms;
    font-weight: bold;
    &:hover {
        background-color: #5da998;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`
const RoundImage = styled.img.attrs(props => ({
    src: props.src || "/images/Textlaceholder.png",
    layout: 'fixed',
    width: 200,
    height: 200,
    alt: "Imagem"
}))`
    border-radius: 50%;
`

const BgImg = styled.div`
    position: absolute;
    top: 64px;
    width: 100%;
    height: 450px;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.src});
    z-index: -1;
`

const Info = styled.p`
    text-align: justify;
    font-family: 'Open Sans', sans-serif;
`

function App() {
    return (
        <Fragment>
            <BgImg src="/images/background_1.jpg" />
            <div className="container mx-auto">
                <div className="row mb-5 pb-5">
                    <div className="col">
                        <Logo />
                    </div>
                    <div className="col-2">
                        <Text className="text-muted mt-2 mb-0">Telefone:</Text>
                        <Text>(85) 9 8188-1411</Text>
                    </div>
                    <div className="col-2">
                        <Text className="text-muted mt-2 mb-0">Email:</Text>
                        <a
                            href="mailto:arcel.ce@hotmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            arcel.ce@hotmail.com
                        </a>
                    </div>
                    <div className="col">
                        <Button>
                            Solicite um or??amento
                        </Button>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <RoundImage src="/images/Img1.png" className="card-img-top" style={{ borderRadius: "50%", width: 200, marginLeft: 50 }} />
                            <div className="card-body">
                                <h5 style={{ textAlign: "center" }} className="card-title">PROCESSO DE COC????O PARA PRODUTOS N??O COMEST??VEIS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <RoundImage src="/images/Img2.png" className="card-img-top" style={{ borderRadius: "50%", width: 200, marginLeft: 50 }} />
                            <div className="card-body">
                                <h5 style={{ textAlign: "center" }} className="card-title">PROCESSAMENTO DE PESCADOS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <RoundImage src="/images/Img3.png" className="card-img-top" style={{ borderRadius: "50%", width: 200, marginLeft: 50 }} />
                            <div className="card-body">
                                <h5 style={{ textAlign: "center" }} className="card-title">TOLVA DE RECEP????O</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-2 py-5" style={{ backgroundColor: "#76d6c0", color: "white" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="display-2">Nossa Hist??ria</h1>
                            <Info>
                                Iniciando o ciclo profissional desde 1971 nas maiores empresas do seguimento de alimentos,
                                especificamente em processamento na ind??stria de carnes de origem animal e seus derivados.
                                No passar desses 50 anos de an??lise e trabalho salta aos olhos a necessidades de atender cada
                                cliente de forma diferenciada objetiva e principalmente econ??mica. Nesse sentido a Arcel,
                                vem desenvolvendo desde 2006 , servi??os de consultoria em projetos e instala????es de m??quinas
                                e equipamentos, otimizando tempo e trabalhos dentro das industrias.
                            </Info>
                        </div>
                        <div className="col-5">
                            <Image src="/images/About.jpg" width="5797" height="3865" alt="Sobre n??s imagem" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-5">
                        <Image src="/images/Logo_black.png" width="105" height="105" alt="Logo" />
                    </div>
                    <div className="col-2">
                        <Text className="text-muted mt-2 mb-0">Telefone:</Text>
                        <Text>(85) 9 8188-1411</Text>
                    </div>
                    <div className="col-2">
                        <Text className="text-muted mt-2 mb-0">Email:</Text>
                        <a
                            href="mailto:arcel.ce@hotmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            arcel.ce@hotmail.com
                        </a>
                    </div>
                    <div className="col">
                        <Text className="text-muted mt-2 mb-0">Endere??o:</Text>
                        <Text>CEP 60192-070 - Rua Andrade Furtado - Fortaleza, CE, N?? 45, Coc??</Text>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default App;