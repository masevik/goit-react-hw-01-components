import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[5]};
  height: 60px;
  text-align: center;
  text-transform: uppercase;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% / 5);
  align-items: center;
  border-top: 1px solid #e3e7ed93;

  :not(:last-child) {
    border-right: 1px solid #e3e7ed93;
  }

  :first-child {
    border-bottom-left-radius: 4px;
  }

  :last-child {
    border-bottom-right-radius: 4px;
  }
`;
export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
`;
