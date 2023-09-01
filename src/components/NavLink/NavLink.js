import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <UnhoveredText>{children}</UnhoveredText>
      <HoveredText aria-hidden={true}>{children}</HoveredText>
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
    transform: translateY(0%);
    transition: transform var(--exit-transition-time);
    ${Wrapper}:hover & {
      transform: translateY(-100%);
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

  font-weight: ${WEIGHTS.bold};

  @media ${QUERIES.noMotionReductionPreference} {
    transform: translateY(100%);
    transition: transform var(--exit-transition-time);
    ${Wrapper}:hover & {
      transform: translateY(0%);
      transition: transform var(--enter-transition-time);
    }
  }
`;

export default NavLink;