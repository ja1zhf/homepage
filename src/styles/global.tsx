'use client';

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #111111;
    color: #ffffff;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  width: 580px;
  display: flex;
`;
