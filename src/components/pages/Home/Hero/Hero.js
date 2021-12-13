import React from "react";
import { HeroContainer, Image, Text} from './Hero.styles';
import ItemImage from '../../../../assets/ItemAbout.png'


const Hero = () => (
  <HeroContainer>
    <Image>
      <img src={ItemImage} alt="Logo" />
    </Image>
    <Text>
      a building where you pay to have a room to sleep in, and where you can sometimes eat meals:
      a four-star hotel
      the Clarendon Hotel
      We stayed in/at a hotel on the beach.
      hotel guests
    </Text>
  </HeroContainer>
);

export default Hero;