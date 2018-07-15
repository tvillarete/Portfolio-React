import React, { Component } from 'react';
import styled from 'styled-components';
import { constants } from '../toolbox';
import { scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

const { color, animation } = constants;

const breakpointSm = `@media screen and (max-width: 700px)`;

const Container = styled.div`
   position: relative;
   height: 100vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

const Profile = styled.img`
   max-height: 7rem;
   border-radius: 50%;
   margin: 16px;

   ${breakpointSm} {
      max-height: 5rem;
   }
`;

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 1;
   margin-top: 20vh;
   padding: 0 10px;
   animation: ${animation.fadeIn} 0.5s;

   ${breakpointSm} {
      margin-top: 6vh;
      flex-wrap: nowrap;
   }
`;

const Intro = styled.img`
   height: 3rem;
   margin: 16px 0;
   pointer-events: none;

   ${breakpointSm} {
      height: 2.25rem;
      margin: 16px 0;
   }
`;

const SubtitleContainer = styled.div`
   display: flex;
   flex-wrap: wrap;

   ${breakpointSm} {
      text-align: center;
      flex-direction: column;
   }
`;

const Subtitle = styled.h2`
   margin: 16px 0;
   font-weight: 300;

   ${breakpointSm} {
      margin: 10px 0;
      font-size: 1.25rem;
   }
`;

const Bullet = styled.h2`
   margin: 16px;

   &:before {
      content: '•';
   }

   ${breakpointSm} {
      display: none;
   }
`;

const LinkContainer = styled.div`
   margin: 24px 0;
   display: flex;
   justify-content: center;
   align-items: flex-end;
`;

const A = styled.a`
   margin: 0 1rem;
`;

const LinkImg = styled.img`
   max-height: 2.25rem;
   max-width: 2.25rem;

   &:first-child {
      margin-left: 0;
   }

   &:last-child {
      margin-right: 0;
   }

   ${breakpointSm} {
      max-height: 1.25rem;
      max-width: 1.25rem;
   }
`;

const ChevronContainer = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 40px;
   cursor: pointer;
   animation: ${animation.fadeIn} 0.5s;

   &:hover {
      .chevron {
         transform: translateY(10px);
      }
   }
`;

const ChevronLabel = styled.h3`
   font-weight: 300;
   color: ${color.gray[6]};
   user-select: none;
`;

const Chevron = styled.img`
   user-select: none;
   pointer-events: none;
   max-width: 48px;
   transition: all 0.15s ease;
`;

export default class Header extends Component {
   state = {
      showHeader: false,
      showChevron: false,
   }

   scrollDown = () => {
      scroller.scrollTo('scroll-to-element', {
         duration: 800,
         delay: 0,
         smooth: 'easeInOut',
      });
   };

   componentDidMount() {
      setTimeout(() => {
         this.setState({ showHeader: true });
      }, 500);
      setTimeout(() => {
         this.setState({ showChevron: true });
      }, 1000);
   }

   render() {
      const path = `images/icons`;

      return (
         <Container>
            <Fade cascade when={this.state.showHeader}>
               <TextContainer>
                  <Profile src="images/hero/profile.jpg" />
                  <Intro src="images/hero/Intro.svg" />
                  <SubtitleContainer>
                     <Subtitle>Frontend Developer</Subtitle>
                     <Bullet />
                     <Subtitle>Tennis Enthusiast</Subtitle>
                     <Bullet />
                     <Subtitle>Student</Subtitle>
                  </SubtitleContainer>
                  <LinkContainer>
                     <A href="http://github.com/tvillarete" target="_blank">
                        <LinkImg src={`${path}/github.svg`} />
                     </A>
                     <A href="http://facebook.com/tvillare" target="_blank">
                        <LinkImg src={`${path}/facebook.svg`} />
                     </A>
                     <A href="mailto:tvillarete@gmail.com" target="_blank">
                        <LinkImg src={`${path}/mail.svg`} />
                     </A>
                     <A href="http://linkedin.com/in/tvillarete" target="_blank">
                        <LinkImg src={`${path}/linkedin.svg`} />
                     </A>
                     <A href="tel:1-805-720-9663" target="_blank">
                        <LinkImg src={`${path}/phone.svg`} />
                     </A>
                  </LinkContainer>
               </TextContainer>
            </Fade>
            <Jump>
               <ChevronContainer onClick={this.scrollDown}>
                  <ChevronLabel>Projects</ChevronLabel>
                  <Chevron className="chevron" src={`${path}/chevron-down.svg`} />
               </ChevronContainer>
            </Jump>
         </Container>
      );
   }
}
