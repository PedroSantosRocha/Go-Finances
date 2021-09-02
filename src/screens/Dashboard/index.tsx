import React from 'react';
import { HightLightCard } from '../../components/HightLightCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightLightCards,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/50682093?v=4' }}/>

            <User>
              <UserGreeting>Ola,</UserGreeting>
              <UserName>Pedro</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HightLightCards>
        <HightLightCard />
        <HightLightCard />
        <HightLightCard />
      </HightLightCards>
    </Container>
  );
}
