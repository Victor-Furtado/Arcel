import { Fragment } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Img1 = "/images/Img1.jpg"

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

const justifyContent = ['center', 'flex-start', 'flex-end', 'space-around', 'space-between'];
const alignItems = ['center', 'flex-start', 'flex-end', 'stretch', 'baseline'];

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
const RoundImage = styled.img.attrs({
    src: "/images/placeholder.png",
    layout: 'fixed',
    width: 200,
    height: 200,
    alt: "Imagem"
})`
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
`

function App() {
    return (
        <Fragment>
            <BgImg src="/images/Img1.jpg" />
            <div className="container mx-auto">
                <div className="row mb-5 pb-5">
                    <div className="col">
                        <Logo />
                    </div>
                    <div className="col-2">
                        <p className="text-muted mt-2 mb-0">Telefone:</p>
                        <p>(85) 9 9691-6621</p>
                    </div>
                    <div className="col-2">
                        <p className="text-muted mt-2 mb-0">Email:</p>
                        <a
                            href="mailto:teste@teste.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            teste@teste.com
                        </a>
                    </div>
                    <div className="col">
                        <Button>
                            Solicite um orçamento
                        </Button>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <RoundImage className="card-img-top" style={{ borderRadius: "50%", width: 200, marginLeft: 50 }} />
                            <div className="card-body">
                                <h5 className="card-title">Some title</h5>
                                <p className="card-text">Et voluptatem ab velit quos est at facere. Harum in recusandae delectus. Eum quibusdam aut temporibus iusto. Sapiente animi voluptas id in. Dolore maiores veniam amet unde.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <RoundImage className="card-img-top" style={{ borderRadius: "50%", width: 200, marginLeft: 50 }} />
                            <div className="card-body">
                                <h5 className="card-title">Some title</h5>
                                <p className="card-text">Et voluptatem ab velit quos est at facere. Harum in recusandae delectus. Eum quibusdam aut temporibus iusto. Sapiente animi voluptas id in. Dolore maiores veniam amet unde.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <RoundImage className="card-img-top" style={{ borderRadius: "50%", width: 200, marginLeft: 50 }} />
                            <div className="card-body">
                                <h5 className="card-title">Some title</h5>
                                <p className="card-text">Et voluptatem ab velit quos est at facere. Harum in recusandae delectus. Eum quibusdam aut temporibus iusto. Sapiente animi voluptas id in. Dolore maiores veniam amet unde.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-2 py-5" style={{ backgroundColor: "#76d6c0", color: "white" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="display-2">Nossa História</h1>
                            <Info>
                            Iniciando o ciclo profissional desde 1971 nas maiores empresas do seguimento de alimentos, especificamente em processamento na indústria de carnes de origem animal e seus derivados.  No passar desses 50 anos de análise e trabalho salta aos olhos a necessidades de atender cada cliente de forma diferenciada objetiva e principalmente econômica. Nesse sentido a Arcel , vem desenvolvendo desde 2006 , serviços de consultoria em projetos e instalações de máquinas e equipamentos , otimizando tempo e trabalhos dentro das industrias.</Info>
                        </div>
                        <div className="col-5">
                            <Image src="/images/About.jpg" width="5797" height="3865" alt="Sobre nós imagem" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <Image src="/images/Logo_black.png" width="105" height="105" alt="Logo" />
                    </div>
                    <div className="col-2">
                        <p className="text-muted mt-2 mb-0">Telefone:</p>
                        <p>(85) 9 9691-6621</p>
                    </div>
                    <div className="col-2">
                        <p className="text-muted mt-2 mb-0">Email:</p>
                        <a
                            href="mailto:teste@teste.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            teste@teste.com
                        </a>
                    </div>
                    <div className="col">
                        <p className="text-muted mt-2 mb-0">Endereço:</p>
                        <p>60000-000 R. Café, Nº 257</p>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default App;