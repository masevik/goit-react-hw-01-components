import { Profile } from './Profile/Profile';
import { Box } from './Box';
import user from '../data/user.json';

//   color: ${props => props.theme.colors.primary};

export const App = () => {
  return (
    <Box width="700px" height="100vw" bg="#e7ecf2" mx="auto" pt="10px">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
    </Box>
  );
};
