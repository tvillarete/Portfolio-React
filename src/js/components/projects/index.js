import React, { Component } from 'react';
import styled from 'styled-components';
import Tile from './tile';
import projectJSON from './projects.json';

const Container = styled.div`
   margin-top: 10vh;
   display: flex;
   flex-wrap: wrap;
`;

class ProjectList extends Component {
   render() {
      const { projects } = projectJSON;

      return (
         <Container>
            {projects.map((project, index) => (
               <Tile key={`project-${project.name}`} project={project} />
            ))}
         </Container>
      );
   }
}

export default ProjectList;
