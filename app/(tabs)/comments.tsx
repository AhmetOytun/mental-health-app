import { View, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const comments = () => {
  return (
    <View className="bg-[#FBFBFB] flex-1 items-center justify-center">
      <Image source={images.mona} className="w-[210px] h-[247px]" />
    </View>
  );
};

export default comments;
