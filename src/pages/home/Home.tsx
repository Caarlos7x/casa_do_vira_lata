"use client";

import { IonRow, IonCol, IonFooter } from "@ionic/react";
import Navbar from '../../components/toolbar/Toolbar';
import { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import "./Home.css";
import PhotoGrid from "../galleria/PhotoGrid";
import WhatsAppButton from "../../components/whatsappButton/WhatsAppButton";
import VideoBackground from "../../components/video/VidoBackground";
import Merchant from '../../components/caroussel/CarousselMerchant'

const HomeComponent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <main id="main">
                {/* Botão do WhatsApp */}
                <WhatsAppButton />

                {/* Navbar */}
                <section id="navbar" className="casa-vl-home">
                    <Navbar />
                </section>

                {/* Hero Section */}
                <section id="home">
                    <IonRow className="casa-vl-hero-row">
                        <IonCol size="12" sizeMd="6" className="casa-vl-hero-info">
                            <h3>Casa do Vira-Lata</h3>
                            <p>
                                Não existe animais de rua, existem animais nas ruas e eles
                                precisam de nós!
                            </p>
                        </IonCol>

                        <IonCol size="12" sizeMd="6" className="casa-vl-hero-img">
                            <div className="hero-img"></div>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonRow className="casa-vl-hero-info-panel">
                            <IonCol size="4" className="display-patreon">
                                <a href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848dc7c6e8018de5c56be114ce" target="_blank" rel="noopener">
                                    <span>Assinatura <strong>Mercado Pago</strong></span>
                                </a>
                            </IonCol>

                            <IonCol size="4" className="display-patreon">
                                <a href="https://apoia.se/casadoviralata" target="_blank" rel="noopener">
                                    <span>Assinatura <strong>Apoia-se</strong></span>
                                </a>
                            </IonCol>

                            <IonCol size="4" className="display-patreon">
                                <a href="https://app.picpay.com/user/assinaturacasadoviralata" target="_blank" rel="noopener">
                                    <span>Assinatura <strong>PICPAY</strong> R$ 12,00 por ano</span>
                                </a>
                            </IonCol>
                        </IonRow>
                    </IonRow>
                </section>

                {/* About Section */}
                <section id="about">
                    <IonRow className="about-title">
                        <h1>Quem Somos</h1>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12" sizeMd="6" className="casa-vl-about-us">
                            <p>
                                A <strong>Casa do Vira-Lata</strong> é uma organização dedicada a encontrar lares amorosos
                                para cães e gatos abandonados. Com a paixão pela proteção animal
                                em nosso coração, trabalhamos incansavelmente para resgatar
                                esses animais vulneráveis, oferecendo a eles não apenas um
                                abrigo, mas também amor e cuidado. <br /><br />
                                Nossa missão vai além de simplesmente salvar vidas; buscamos
                                garantir que cada cão e gato tenha a oportunidade de viver em
                                um ambiente seguro e acolhedor. Acreditamos que cada animal
                                merece uma segunda chance e estamos comprometidos em fazer a
                                diferença, uma adoção de cada vez. <br /><br />
                                Realizamos um trabalho de resgate, adoção responsável e
                                conscientização sobre a importância da adoção de animais
                                abandonados. Nossos esforços são sustentados por uma rede
                                de voluntários dedicados, veterinários parceiros e uma
                                comunidade que compartilha nossa visão de um mundo onde
                                todos os animais são valorizados e amados. <br /><br />
                                Ao adotar um animal, você não só transforma a vida dele,
                                mas também ganha um amigo leal e carinhoso. Junte-se a nós
                                nessa jornada de amor e compaixão, e ajude a criar um futuro
                                melhor para cães e gatos que, assim como nós, merecem um lar.
                                Seja parte da mudança. Adote, doe, e espalhe a palavra!
                            </p>
                        </IonCol>

                        <IonCol size="12" sizeMd="6" className="casa-vl-about-img">
                            <div className="about-video"> <VideoBackground /></div>
                        </IonCol>
                    </IonRow>
                </section>

                <section>
                    <div className="caroussel">
                        <Merchant />
                    </div>
                </section>

                {/* Adopt Section */}
                <section id="adopt">
                    <IonRow className="adopt-title">
                        <h1>Vamos adotar um amiguinho?</h1>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12" sizeMd="6" className="photogrid">
                            <PhotoGrid />
                        </IonCol>

                        <IonCol size="12" sizeMd="6">
                            <div className="adopt-forms">
                                <h2>Formulário de adoção</h2>
                                <h3><a href="https://www.instagram.com/casadoviralata/" target="_blank" rel="noopener">Clique aqui</a> e acompanhe nosso dia-a-dia no Instagram</h3>
                                <iframe
                                    className="adopt-form-content"
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSeOTb99-qlbSya0KVOG2Yk091s2925yVYg5_KSwtFoTLn1WHw/viewform?embedded=true"
                                    width="100%"
                                    height="640"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Formulário de Adoção"
                                >
                                    Carregando…
                                </iframe>
                            </div>
                        </IonCol>
                    </IonRow>
                </section>

                {/* Footer */}
                <IonFooter className="casa-vl-footer">
                    <IonRow className="footer-top">
                        <IonCol size="6" className="footer-logo">
                            <a href="#main">
                                <div className="footer-img"></div>
                            </a>
                        </IonCol>

                        <IonCol size="6" className="footer-social">
                            <a href="https://www.instagram.com/casadoviralata/" target="_blank" rel="noopener">
                                <i className="pi pi-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@casadoviralata" target="_blank" rel="noopener">
                                <i className="pi pi-tiktok"></i>
                            </a>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12" className="footer-rights">
                            <span>Casa do Vira-Lata</span> - Todos os direitos reservados | desenvolvido por <span> <a href="https://www.devside.com.br" target="_blank" rel="noopener">devside</a> </span>.
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </main>
        </div>
    );
};

export default HomeComponent;
