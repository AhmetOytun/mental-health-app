import { View, Text, FlatList } from "react-native";
import React from "react";

const items = [
  {
    category: "Trending",
    active: true,
  },
  {
    category: "Relationship",
    active: false,
  },
  {
    category: "Self Care",
    active: false,
  },
  {
    category: "Self Care",
    active: false,
  },
];

const IconsSwipable = () => {
  return (
    <FlatList
      horizontal
      data={items}
      className="mt-5 ml-[25px]"
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => (
        <View
          className={`h-[38px] px-4 ${
            item.active ? "bg-[#FE8235]" : "bg-[#F4F2F1]"
          } items-center justify-center rounded-[9px]`}
        >
          <Text
            className={`font-epilogueSemiBold ${
              item.active ? "text-white" : "text-[#8A8A8A]"
            }`}
          >
            {item.category}
          </Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default IconsSwipable;
