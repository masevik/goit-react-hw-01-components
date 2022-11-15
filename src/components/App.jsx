import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import { Box } from './Box';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

//   color: ${props => props.theme.colors.primary};

export const App = () => {
  return (
    <Box width="700px" height="10000" bg="#e7ecf2" mx="auto" pt="10px">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </Box>
  );
};
