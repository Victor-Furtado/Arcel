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
    margin-top: 0.3rem;
    background-color: #76d6c0;
    border: none;
    color: white;
    padding: 15px 32px;
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
                        <p>(99) 9 9999-9999</p>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nulla sem, ut tincidunt ante euismod sit amet. Etiam at ipsum vel arcu varius pulvinar non eget magna. Donec blandit, justo a tristique interdum, sapien dui venenatis mi, sed varius est sapien sit amet justo. Vestibulum lobortis eros dui, ac sagittis dolor pellentesque et. Cras bibendum fringilla diam, quis vulputate risus hendrerit vitae. Nam imperdiet erat at ex vestibulum ornare. Etiam pulvinar urna lorem, eu suscipit quam venenatis in. Pellentesque sit amet ullamcorper nunc. Aliquam in imperdiet sapien. Mauris laoreet congue est, pretium rhoncus ligula convallis ut. Aenean massa mauris, sollicitudin id pellentesque ac, interdum quis turpis. Cras eu pharetra diam, eget facilisis nibh. Pellentesque a viverra nisi. Cras vitae neque sed enim ultrices varius. In vitae imperdiet nunc. Vestibulum malesuada mi est, quis finibus mauris dictum nec. </Info>
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
                        <p>(99) 9 9999-9999</p>
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