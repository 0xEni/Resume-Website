import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0405860733">0405860733</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:adrian_@live.com.au">adrian_k@live.com.au</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan></Slogan>
          </CompanyContainer>
          <SocialContainer>
                  <SocialIcons href="https://github.com/0xEni">
                <AiFillGithub size={"3rem"} />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/adrian-kumar-312326230/">
                <AiFillLinkedin size={"3rem"} />
              </SocialIcons>
              <SocialIcons href="https://www.instagram.com/adrian_kumar/">
                <AiFillInstagram size={"3rem"} />
              </SocialIcons>
              <SocialIcons href="https://twitter.com/enigmaphysiques">
                <AiFillTwitterCircle size={"3rem"} />
              </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
