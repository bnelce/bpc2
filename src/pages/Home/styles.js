import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
      justifyContent: "space-between",
    },
  })`
    background: #f5f6fa;
  `;

  export const Content = styled.View`
  margin-top: -36px;
`;