'use client';

import styled from "styled-components";

export const Loader = styled.div`
  border: 3px solid #262626;
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
