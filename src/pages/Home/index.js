import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    Container,
    Content
} from './styles';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container showsVerticalScrollIndicator={false}>
        <Header />
        <Content>
      </Content>
    </Container>
  );
}
