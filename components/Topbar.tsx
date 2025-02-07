import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";

const Topbar = () => {
  return (
    <View className="flex-row items-center justify-between h-[44px] px-[25px]">
      <TouchableOpacity>
        <Image source={images.profilePicture} className="w-[42px] h-[42px]" />
      </TouchableOpacity>
      <View>
        <View className="absolute top-0 right-0 left-4 w-[18px] h-[18px] bg-[#FE8235] rounded-full z-10 items-center justify-center">
          <Text className="text-white text-xs text-center">3</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={images.notification}
            className="w-[25px] h-[32px]"
            style={{
              tintColor: "#573926",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topbar;
