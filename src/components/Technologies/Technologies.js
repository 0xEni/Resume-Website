import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaEthereum } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>I've been learning with a range of technologies in the web devlopment and blockchain world.</SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph> 
              Experience with <br />
              React.js
          </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph> 
              Experience with <br />
              Node.js, AWS Cloud
          </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <FaEthereum size="3rem" />
          <ListContainer>
            <ListTitle>Web3</ListTitle>
            <ListParagraph> 
              Experience with <br />
              Solidity, Hardhat, Ether.js
          </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <br />
      <SectionDivider />
  </Section>
);

export default Technologies;
