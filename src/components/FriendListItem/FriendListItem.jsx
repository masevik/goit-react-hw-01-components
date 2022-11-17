import PropTypes from 'prop-types';
import { IsOnline, Avatar, Name } from './FriendListItem.styled';
import { Box } from '../Box';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="left"
      height="75px"
      mb="10px"
      pl="32px"
      bg="background"
      borderRadius="normal"
      boxShadow="standard"
      key={id}
    >
      <IsOnline isOnline={isOnline}>{isOnline}</IsOnline>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name isOnline={isOnline}>{name}</Name>
    </Box>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
