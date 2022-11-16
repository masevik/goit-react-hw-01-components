import PropTypes from 'prop-types';
import { Item, IsOnline, Avatar, Name } from './FriendList.styled';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      display="block"
      width="300px"
      height="415px"
      m="0px auto 10px"
      color="text"
      borderRadius="4px"
      as="ul"
    >
      {friends.map(item => (
        <Item key={item.id}>
          <IsOnline isOnline={item.isOnline}>{item.isOnline}</IsOnline>
          <Avatar src={item.avatar} alt="User avatar" width="48" />
          <Name isOnline={item.isOnline}>{item.name}</Name>
        </Item>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
