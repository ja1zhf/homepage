'use client';

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #111111;
    color: #ffffff;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
