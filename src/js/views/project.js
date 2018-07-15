import React, { Component } from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';

const OuterContainer = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: ${props => (props.isOpen ? 'block' : 'none')};
   transition: all 0.25s ease;
   overflow: auto;
`;

const ProjectCover = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   animation: ${props => (props.isClosing ? 'fadeOut' : 'fadeIn')} 0.3s ease;
   background: rgba(0, 0, 0, 0.8);

   @keyframes fadeIn {
      from {
         opacity: 0;
      }
   }

   @keyframes fadeOut {
      to {
         opacity: 0;
      }
   }
`;

const ProjectContainer = styled.div`
   position: relative;
   background: white;
   min-height: 180vh;
   width: 100%;
   max-width: 50em;
   margin: 3rem auto;
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0 0 50px rgb(70, 70, 70);
   animation: ${props => (props.isClosing ? 'slideOut' : 'slideIn')} 0.3s ease;

   @keyframes slideIn {
      0% {
         opacity: 0;
         transform: translateY(10%);
      }
   }

   @keyframes slideOut {
      100% {
         opacity: 0;
         transform: translateY(5%);
      }
   }

   @media screen and (max-width: 700px) {
      margin: 0 auto;
      border-radius: 0;
   }
`;

const CloseButton = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   height: 2em;
   width: 2em;
   background: rgb(220, 220, 220);
   display: flex;
   border-radius: 50%;
   margin: 1em;
   cursor: pointer;

   svg {
      color: rgba(70, 70, 70, 0.8);
      margin: auto;
   }
`;

export default class ProjectView extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isOpen: props.isOpen,
         isClosing: false,
      };
   }

   animateClosed = () => {
      this.setState({
         isClosing: true,
      });

      setTimeout(() => {
         this.setState({ isClosing: false });
         this.props.onEvent({
            type: 'close-project',
         });
      }, 300);
   };

   render() {
      const { isOpen, currentProject } = this.props;
      const { isClosing } = this.state;

      return (
         <OuterContainer isOpen={isOpen || isClosing}>
            <ProjectCover
               isOpen={isOpen || isClosing}
               isClosing={isClosing}
               onClick={this.animateClosed}
            />
            <ProjectContainer
               isOpen={isOpen || isClosing}
               isClosing={isClosing}>
               <CloseButton onClick={this.animateClosed}>
                  <X />
               </CloseButton>
               {currentProject}
            </ProjectContainer>
         </OuterContainer>
      );
   }
}
