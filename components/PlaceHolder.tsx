import { View, Text } from "react-native";
import React from "react";

const PlaceHolder = () => {
  return (
    <View
      style={{
        height: 151,
        backgroundColor: "#55A06F",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 30,
          fontFamily: "Epilogue-Bold",
        }}
      >
        Plan Expired
      </Text>
    </View>
  );
};

export default PlaceHolder;
