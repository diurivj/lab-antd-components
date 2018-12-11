import React, {Component} from "react"
import { Carousel } from 'antd';

class CarouselMefit extends Component{
   onChange = (a, b, c)=> {
    console.log(a, b, c);
  }
  render(){
    return (<Carousel afterChange={this.onChange}>
      <div><img src="https://thewallpaper.co/wp-content/uploads/2016/05/hd-nature-wallpapers-amazing-images-love-download-wallpaper-desktop-images-background-photos-high-resolution-botanic-1200x800.jpg" /> </div>
      <div><img src="http://i.cdnraw.com/previews/downloads/d/p/v/p-tropical-palm-trees-pv1wmdgnR3-1.jpg" /></div>
      <div><img src="https://images.alphacoders.com/469/46961.jpg" /></div>
      <div><img src="http://www.ifreewallpaper.com/wallpapers_download/mobile/1200_800_wallpapers/20110205/B/B_orangedays_78lp5tqt.jpg" /></div>
    </Carousel>)
  }
}

export default CarouselMefit;




  