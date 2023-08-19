import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;

  border-spacing: 1px;
  background-color: #e5ecec;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Titles = styled.thead`
  height: 50px;

  text-transform: uppercase;

  background-color: #38b5c1;
  color: white;
`;

export const Data = styled.tbody`
  text-align: center;
  color: gray;
`;

export const TableRow = styled.tr`
  height: 45px;

  &:nth-child(2n) {
    background-color: #ebf0f0;
  }

  &:nth-child(2n + 1) {
    background-color: white;
  }
`;
