import React from 'react';
import styled from 'styled-components';

const breakpointSm = `@media screen and (max-width: 700px)`;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   height: 20em;
   width: 100%;
   max-width: 20em;
   margin: 1em;
   border-radius: 12px;
   overflow: hidden;
   box-shadow: 0 16px 36px rgba(0, 16, 48, 0.14);
   transition: all 0.25s cubic-bezier(0,1.24,.74,.99);
   background: white;

   &:hover {
      transform: scale(1.03);
   }

   &:active {
      transform: scale(1);
      box-shadow: 0 16px 56px rgba(0, 16, 48, 0.14);
   }

   ${breakpointSm} {
      margin: 1em 0;
   }
`;

const HeroContainer = styled.div`
   height: 65%;
   background: url('images/tiles/flowchamp.svg') no-repeat;
   background-size: cover;
`;

const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   padding: 1em;
`;

const Title = styled.h2`
   margin: 0;
`;

const Subtitle = styled.h3`
   margin: 4px 0;
   font-weight: 300;
   color: darkgray;
   font-size: 16px;
`;

const FrameworkContainer = styled.div`
   display: flex;
`;

const Framework = styled.img`
   width: 1.8em;
   margin: 0 1em 0 0;
`;


const Tile = ({ project, onClick }) => {
   const openProject = () => {
      onClick({
         type: 'open-project',
         project
      });
   }

   return (
      <Container onClick={openProject}>
         <HeroContainer />
         <InfoContainer>
            <Title>{project.name}</Title>
            <Subtitle>{project.shortDescription}</Subtitle>
            <FrameworkContainer>
            {project.technologies.map(name => (
               <Framework src={`images/icons/frameworks/${name}.svg`} />
            ))}
            </FrameworkContainer>
         </InfoContainer>
      </Container>
   );
};

export default Tile;
