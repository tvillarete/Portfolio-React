import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Container = styled.a`
   display: flex;
   flex: 1;
   margin: 16px;
   border-radius: 8px;
   background: white;
   padding: 16px;
   text-decoration: none;

   :visited {
      text-decoration: none;
   }

   :hover {
      h2 {
         color: #1d92fa;
      }
   }
`;

const Icon = styled.div`
   margin-left: 8px;
   width: 5em;
   background: url("${props => props.src}") no-repeat center;
   background-size: contain;
`;

const InfoContainer = styled.div`
   flex: 1;
   padding-left: 16px;
`;

const Title = styled.h2`
   color: black;
   font-size: 20px;
   transition: color 0.15s;
`;

const Description = styled.h4`
   font-weight: 400;
   color: #828d96;
   border-left: 3px solid #e4e7ea;
   padding-left: 16px;
`;

class Tile extends Component {
   render() {
      const { project } = this.props;
      console.log(project);
      const { image } = project;

      return (
         <Container href={project.url} target="_blank">
            <Icon src={image} />
            <InfoContainer>
               <Title>{project.name}</Title>
               <Description>{project.description}</Description>
            </InfoContainer>
         </Container>
      );
   }
}

export default Tile;
