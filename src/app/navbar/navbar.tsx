'use client';

import Image from 'next/image';
import { Nav, NavContainer, NavLink, NavLinks, NavLogo, NavText, NavTitle } from '../../styles/navbar';
import { useState } from 'react';

export default function Navbar() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <NavContainer>
      <Nav>
        <NavTitle href='/' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {
            isHovering ? (
              <NavLogo src='/icon-hover.png' />
            ) : (
              <NavLogo src='/icon.png' />
            )
          }
          <NavText>ja1z?</NavText>
        </NavTitle>
        <NavLinks>
          <NavLink href='/works'>Works</NavLink>
          <NavLink href='https://github.com/Ja1z666/homepage' target="_blank"><Image src={'/icons/github.svg'} width={18} height={18} alt='Github Icon' />Source</NavLink>
        </NavLinks>
      </Nav>
    </NavContainer >
  )
}
