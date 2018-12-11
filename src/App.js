import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';
import {Button} from 'antd';  // or 'antd/dist/antd.less'


class App extends Component {
  render() {
    return (
      <div className="App">

      <h1>Sabás Mendívil</h1>
      <p>Fotografía</p>
    
  <Carousel vertical>

<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/43040452150_e692a6a8ff_z.jpg" alt="sabasfotografia"/></div>
<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/43040496900_8bb9385a32_z.jpg" alt="sabasfotografia"/></div>
<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/28366396749_a4e36059ae_z.jpg" alt="sabasfotografia"/></div>
<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/36994260240_f4df7cea25_z.jpg" alt="sabasfotografia"/></div>
<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/37280550420_cf95a24043_z.jpg" alt="sabasfotografia"/></div>
<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/39229422245_f93ce294aa_z.jpg" alt="sabasfotografia"/></div>
<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/28347972019_279518bb0e_z.jpg" alt="sabasfotografia"/></div>
<div><img class="foto" src="https://res.cloudinary.com/sabasmendivil/image/upload/v1544491973/Fotos/42858039622_8c38c10d6d_z.jpg" alt="sabasfotografia"/></div>
  </Carousel>

<div id="button"><Button type="primary" onClick={()=>{ alert('smma1992@gmail.com'); }}>Contacto</Button></div>
      </div>
    )
  }
}
export default App;
