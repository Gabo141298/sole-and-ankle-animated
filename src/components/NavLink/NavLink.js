import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <HoveredText aria-hidden={true}>{children}</HoveredText>
      <UnhoveredText>{children}</UnhoveredText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  --enter-transition-time: 150ms;
  --exit-transition-time: 200ms;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const UnhoveredText = styled.span`
  display: block;
  @media ${QUERIES.noMotionReductionPreference} {
    /* Original solution */
    /* transform: translateY(0%); */

    /* Stretch goal */
    transform: scale(1);
    transition: transform var(--exit-transition-time);
    ${Wrapper}:hover & {
      /* Original solution */
      /* transform: translateY(-100%); */

      /* Stretch goal */
      transform: scale(0);
      transition: transform var(--enter-transition-time);
    }
  }
`;

const HoveredText = styled.span`
  display: block;
  /* 
    Make it so it doesn't occupy any space
    It instead occupies the space of the unhovered space with transforms.
  */
  position: absolute;
  inset: 0;
  margin: auto;

  /* Original solution */
  /* font-weight: ${WEIGHTS.bold}; */

  /* Stretch goal */
  opacity: 0.6;

  @media ${QUERIES.noMotionReductionPreference} {
    /* Original solution */
    /* transform: translateY(100%);
    transition: transform var(--exit-transition-time);
    ${Wrapper}:hover & {
      transform: translateY(0%);
      transition: transform var(--enter-transition-time);
    } */
  }
`;

export default NavLink;