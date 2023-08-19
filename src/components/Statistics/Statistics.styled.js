import styled from 'styled-components';

export const Wrapper = styled.section`
  width: fit-content;
  text-align: center;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Title = styled.h2`
  padding: 20px 15px;

  font-size: 24px;
  text-transform: uppercase;
  color: gray;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  color: white;
  background-color: ${props => props.color};
`;

export const Percentage = styled.span`
  font-weight: 600;
`;
