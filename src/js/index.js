import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/header';
import ProjectList from './components/projects';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
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

export default class Portfolio extends Component {
   state = {
      showProjects: false,
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({ showProjects: true });
      }, 700);
   }

   render() {
      return (
         <Container>
            <Gradient />
            <Header />
            <Fade when={this.state.showProjects}>
            <ProjectList />
            </Fade>
         </Container>
      );
   }
}
