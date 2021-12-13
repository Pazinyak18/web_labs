import React from "react";
import { Wrapper,Logo, IconsWrapper, Line, Image, Text, Icons } from "./Footer.styled";
import logo from '../../../assets/item-barn-icon.png';
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <Image>
            <img className="Logo" src={logo} alt="Logo" />
        </Image>
        <Text>My item
       </Text>
      </Logo>
      <Line />
      <IconsWrapper>
          <Icons component={YoutubeOutlined} color='#000000'/>
          <Icons component={TwitterOutlined} color='#000000' />
          <Icons component={LinkedinOutlined} color='#000000'/>
          <Icons component={InstagramOutlined} color='#000000'/>
      </IconsWrapper>
      <Line />
      <Text>© item
      all rights reserved</Text>
    </Wrapper>
  );
};

export default Footer;