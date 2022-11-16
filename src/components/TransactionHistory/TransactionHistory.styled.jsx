import styled from 'styled-components';

export const ColumnsTitle = styled.th`
  width: calc(100% / 3);
  height: 40px;
  background-color: #00bcd5;
`;

export const ColumnsRow = styled.tr`
  height: 40px;
  /* text-align: center; */

  :nth-child(2n) {
    background-color: #ecf1f4;
  }
`;

export const ColumnsRowInfo = styled.td`
  :first-child {
    padding-left: 50px;
  }

  :nth-child(2) {
    text-align: right;
    padding-right: 57px;
  }

  :last-child {
    text-align: center;
  }
`;
