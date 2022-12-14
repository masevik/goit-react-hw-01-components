import styled from 'styled-components';

export const IsOnline = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[5]};
  background-color: ${p => {
    return p.isOnline ? p.theme.colors.online : p.theme.colors.secondText;
  }};
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: ${p => p.theme.space[5]};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => {
    return p.isOnline ? p.theme.colors.online : p.theme.colors.secondText;
  }};
`;
