import React from 'react';
import { DiDatabase, DiReact, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have used a wide variety of different technologies over the years. JavaScript, Node.js, Express.js, React, HTML, CSS, MongoDB, PHP, MySQL, C++, C#.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React <br />
            Next.js <br />
            styled-components <br />
            Tailwind CSS <br />
            HTML + CSS + Bootstrap             
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            CodeIgniter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MongoDB <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
