import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Box } from './Box';
import user from '../data/user.json';
import data from '../data/data.json';

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
      />
      <Statistics title="Upload stats" stats={data} />
    </Box>
  );
};
