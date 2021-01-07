import React, { useState } from "react";
import { Dimensions } from "react-native";
import { add } from "react-native-reanimated";
import {
  cond,
  eq,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import {
  snapPoint,
  timing,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { State } from "react-native-gesture-handler";
import {
  Container,
  HeaderContent,
  AccountInfo,
  LeftSide,
  AccountBalanceRow,
  AccountBalance,
  AccountBalanceValue,
  AccountBalanceInfo,
  Avatar,
  SideIndicator,
  ActiveIndicator
} from "./styles";

const { width } = Dimensions.get("window");

export default function Header() {
  const [balanceIsVisible, setBalanceIsVisible] = useState(true);

  const snapPoints = [-width - 20, (-width - 20) / 2, 0];

  const {
    gestureHandler,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  const accountInfoTranslateX = useValue(0);
  const accountInfoOffsetX = useValue(0);
  const to = snapPoint(accountInfoTranslateX, velocity.x, snapPoints);

  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(accountInfoTranslateX, add(accountInfoOffsetX, translation.x))
      ),
      cond(eq(state, State.END), [
        set(accountInfoTranslateX, timing({ from: accountInfoTranslateX, to })),
        set(accountInfoOffsetX, accountInfoTranslateX),
      ]),
    ],
    []
  );
    return (
      <Container>
        <HeaderContent>
        <AccountInfo
            style={{
              transform: [
                {
                  translateX: accountInfoTranslateX.interpolate({
                    inputRange: [(-width - 20) * 0.5, 0],
                    outputRange: [(-width - 20) * 0.5, 0],
                    extrapolate: Extrapolate.CLAMP,
                  }),
                },
              ],
            }}
          >
       <LeftSide
              style={{
                opacity: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [0, 1],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }}
            >
              <AccountBalanceRow>
                <AccountBalance>
                  <AccountBalanceValue>Bombeiro Civil Operacional</AccountBalanceValue>
                </AccountBalance>
              </AccountBalanceRow>
              <AccountBalanceInfo>O aplicativo do BPC</AccountBalanceInfo>
            </LeftSide>
          </AccountInfo>
          <Avatar>
          <MaterialCommunityIcons name="fire" size={40} color="#ff500f" />
          {/*<Avatar onPress={() => signOut()}>          
          <Initials>ID</Initials>*/}
        </Avatar>
        </HeaderContent>
        <SideIndicator>
        <ActiveIndicator
          style={{
            transform: [
              {
                translateX: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [31 + 5, 0],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          }}
        >
        </ActiveIndicator>
      </SideIndicator>
      </Container>
    );
  }
  
  