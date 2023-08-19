import styled from 'styled-components';

const cardWidth = 300;

export const Card = styled.div`
  width: ${cardWidth}px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const UserWrapper = styled.div`
  padding: 30px;
  text-align: center;
`;

export const Avatar = styled.img`
  margin: 0 auto;

  margin-bottom: 20px;
  width: 100px;
`;

export const UserName = styled.p`
  margin-bottom: 5px;

  font-size: 22px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-bottom: 5px;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: ${cardWidth / 3}px;
  gap: 5px;

  color: gray;
  text-align: center;
  background-color: #fffafa;
  border: #dcdcdc;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

export const Quantity = styled.span`
  font-weight: 600;
  color: black;
`;
