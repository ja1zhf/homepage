'use client';

import styled from 'styled-components';

export const Status = styled.div`
  width: 580px;
  height: 50px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin: 0px 15px;
  background-color: #262626;
`;

export const ShortInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 580px;
  padding: 0px 15px;
`;

export const ShortInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  & > h2 {
    font-size: 42px;
    font-weight: 700;
    margin: 0px;
  }

  & > p {
  font-size: 18px;
  font-weight: 400;
    margin: 0px;
  }
`;

export const ShortInfoAvatar = styled.img`
  width: 120px;
  height: 120px;
  border: solid 2px #ffffff;
  border-radius: 100px;
`;
