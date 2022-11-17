import PropTypes from 'prop-types';
import { Title, Item, Label, Percentage } from './Statistics.styled';
import { Box } from '../Box';

function changeColor() {
  let itemStyle = {
    backgroundColor:
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase(),
  };

  return itemStyle;
}

// let code = 341285;

// function changeColor() {
//   let divStyle = {
//     backgroundColor: '#' + code,
//   };
//   code += 100010;
//   console.log(code);
//   return divStyle;
// }

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      display="block"
      width="300px"
      height="167px"
      bg="background"
      m="0px auto 10px"
      color="text"
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      as="section"
    >
      {title && <Title>{title}</Title>}
      <Box display="flex" height="75px" as="ul">
        {stats.map(item => (
          <Item style={changeColor()} key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
