import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    Container,
    Content
} from './styles';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function Home() {
  return (
    <Container showsVerticalScrollIndicator={false}>
        <Header />
        <Content>
        <Menu />
      </Content>
    </Container>
  );
}
