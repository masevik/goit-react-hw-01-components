import styled from 'styled-components';

export const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[5]};
  width: 120px;
  height: 120px;
  border-radius: ${p => p.theme.radii.round};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.secondText};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.secondText};
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  padding: 10px;
  width: calc(100% / 3);
  border-top: 2px solid #e3e7ed93;
  background-color: ${p => p.theme.colors.secondaryBackground};

  :not(:last-child) {
    border-right: 2px solid #e3e7ed93;
  }

  :first-child {
    border-bottom-left-radius: 4px;
  }

  :last-child {
    border-bottom-right-radius: 4px;
  }
`;

export const StatsLabel = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[2]};
  color: ${p => p.theme.colors.secondText};
`;

export const StatsValue = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
