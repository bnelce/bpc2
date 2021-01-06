import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { MenuItemContainer, MenuItem, Icon, MenuItemTitle } from "./styles";

const items = [
  {
    icon: "bar-chart",
    title: "Dashboard",
  },
  {
    icon: "file-text",
    title: "Notícias",
  },
  {
    icon: "activity",
    title: "Ocorrências",
  },
  {
    icon: "shopping-bag",
    title: "Loja",
  },
  {
    icon: "user-check",
    title: "Escala de Glasgow",
  },
  {
    icon: "file-text",
    title: "Legislação",
  },
  {
    icon: "file-text",
    title: "NBRs",
  },
  
];


const Menu = () => {
 
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => (
        <MenuItemContainer>
          <MenuItem>
            <Icon>
              {typeof item.icon === "string" ? (
                <Feather name={item.icon} size={30} color="#ff8700" />
              ) : (
                item.icon
              )}
            </Icon>
            <MenuItemTitle>{item.title}</MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
      )}
      keyExtractor={(item) => item.title}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        justifyContent: "space-between",
      }}
      scrollEnabled={false}
      //style={{ height: menuHeight }}
    />
  );
};

export default Menu;
