import React, { Component } from 'react';
import styled from 'styled-components';
import config from './config.json';
import ProjectView from './views/project';
import Tile from './components/tile';
import Header from './components/header';
import { Element } from 'react-scroll';

const MainContainer = styled.div`
   overflow: auto;
   max-width: 50em;
   margin: 0 auto;
`;

const Gradient = styled.div`
   z-index: -1;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   height: 30em;
   background: white;
   background-image: linear-gradient(
      to bottom,
      #ffffff,
      #fcfcfd,
      #faf9fa,
      #f7f7f8,
      #f4f4f6
   );
`;

const ProjectsContainer = styled.div`
   min-height: 100vh;
`;

const TileSectionsContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1em;
`;

const Section = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 1em;
`;

const SectionHeader = styled.h1``;

const TileContainer = styled.div`
   display: flex;
   flex: 1;
   flex-wrap: wrap;
`;

export default class Portfolio extends Component {
   state = {
      projectViewer: {
         isOpen: false,
      },
   };

   handleEvent = options => {
      switch (options.type) {
         case 'open-project':
            this.openProject(options);
            break;
         case 'close-project':
            this.closeProject();
            break;
         default:
            console.log(options);
      }
   };

   openProject(options) {
      this.setState({
         projectViewer: {
            currentProject: options.name,
            isOpen: true,
         },
      });
   }

   closeProject() {
      this.setState({
         projectViewer: {
            currentProject: null,
            isOpen: false
         }
      });
   }

   getTiles = () => {
      const { projects } = config;
      const containers = [];
      const currentYear = new Date().getFullYear();

      for (let year = 2014; year <= currentYear; year++) {
         containers.push({
            year,
            projects: [],
         });
      }

      for (let item in projects) {
         const project = projects[item];
         const time =
            project.time.end.year === 'Present'
               ? currentYear
               : project.time.end.year;

         containers.forEach((container, index) => {
            if (container.year === time) {
               containers[index].projects.push(
                  <Tile
                     key={project.name}
                     project={project}
                     onClick={this.handleEvent}
                  />,
               );
            }
         });
      }

      return (
         <TileSectionsContainer>
            {containers.reverse().map(
               (container, i) =>
                  container.projects.length ? (
                     <Section key={i}>
                        <SectionHeader>
                           {container.year === currentYear
                              ? 'Ongoing'
                              : container.year}
                        </SectionHeader>
                        <TileContainer key={i}>
                           {container.projects.map((tile, j) => {
                              return tile;
                           })}
                        </TileContainer>
                     </Section>
                  ) : null,
            )}
         </TileSectionsContainer>
      );
   };

   render() {
      const { projectViewer, currentProject } = this.state;

      return (
         <MainContainer>
            <Header />
            <Gradient />
            <ProjectsContainer>
               {this.getTiles()}
            </ProjectsContainer>
            <Element name="scroll-to-element" className="element">
               <ProjectView
                  isOpen={projectViewer.isOpen}
                  currentProject={currentProject}
                  onEvent={this.handleEvent}
               />
            </Element>
         </MainContainer>
      );
   }
}
