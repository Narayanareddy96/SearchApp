import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = ({ headerText }) => (
  <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Search App', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
);

export default AppHeader;
