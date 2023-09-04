'use client';

import Link from 'next/link';
import styled from "styled-components";

export const NavText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 0px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;
`;

export const NavContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  padding: 0px 15px;
`;

export const NavTitle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ffffff;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavLogo = styled.img`
  width: 60px;
`;
