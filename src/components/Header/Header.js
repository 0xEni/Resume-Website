import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignIatems: "center", color: 'white', marginBotto: '20;' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>

        </a>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Tech-Stack</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#work">
          <NavLink>Work-Experience</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
