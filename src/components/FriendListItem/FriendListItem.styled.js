import styled from 'styled-components';

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  padding: 15px 15px;

  display: flex;
  align-items: center;
  gap: 15px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 14px;

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
  border-radius: 50%;
`;
