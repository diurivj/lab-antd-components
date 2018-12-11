import React from 'react'
import { Layout, Menu, Carousel, Steps } from 'antd'

const {
    Header, Footer, Content,
  } = Layout

const { Step } = Steps

const Skin = () => (
    <div>
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Acerca de</Menu.Item>
                <Menu.Item key="2">Inicio</Menu.Item>
                <Menu.Item key="3">Contacto</Menu.Item>
            </Menu>
            </Header>
            <Content className="contentLayout">
                <Carousel className="carouselWid" autoplay>
                    <div><img src="/img/img1.jpg"/></div>
                    <div><img src="/img/img2.jpg"/></div>
                    <div><img src="/img/img3.jpg"/></div>
                    <div><img src="/img/img4.jpg"/></div>
                </Carousel>
            </Content>
            <Steps current={0}>
                <Step title="Inicio" description="Decide cuál paisaje te gusta" />
                <Step title="Descarga" description="Da click derecho en la imagen que te guste para descargarla" />
            </Steps>
            <Footer style={{ textAlign: 'center' }}>
               Gerardo Jiménez
            </Footer>
        </Layout>
    </div>
)
export default Skin