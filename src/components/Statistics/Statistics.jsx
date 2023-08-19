import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Percentage,
  Title,
  Wrapper,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} color={getRandomColor()}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

function getRandomColor() {
  const letters = '0123456789ABCDE';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}
