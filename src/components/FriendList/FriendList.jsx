import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

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
        <FriendListItem
          key={item.id}
          id={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        ></FriendListItem>
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
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
