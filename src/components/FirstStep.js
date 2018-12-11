import React from 'react'
import { Card } from 'antd'


const FirstStep = () => (
    <div className="">
        <h1>Hola diegitow</h1>
        <p>
            Le neta no quiero hacer nada, voa poner puras imagenes:
        </p>
        <div>
            <Card
                title="Cards"
                style={{ width: 300 }}
            >
                <p>Tyler 1</p>
                <img style={{ maxWidth: '60%' }} src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/46447525_2210708512272664_6205946503966490624_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=0ea4a451e4b76f37f0c12981a8091fdc&oe=5CAD9267" alt="" />
            </Card>
            <Card
                title="Cards"
                style={{ width: 300 }}
            >
                <p>Tyler 1</p>
                <img style={{ maxWidth: '60%' }} src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/46447525_2210708512272664_6205946503966490624_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=0ea4a451e4b76f37f0c12981a8091fdc&oe=5CAD9267" alt="" />
            </Card>
        </div>
    </div>
)

export default FirstStep