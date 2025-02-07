import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";

const UpcomingSession = () => {
  return (
    <View className="bg-[#FEF3E7] rounded-[20px] pt-[10] pl-5 h-[151px]">
      <Text className="font-epilogueBold text-2xl text-[#573926] mt-2">
        Upcoming Session
      </Text>
      <Text className="font-rubikRegular text-sm mt-2 mb-1 text-[#573926] leading-[14px]">
        Sahana V, Msc in Clinical Psychology
      </Text>
      <Text className="font-rubikBold text-[12px] mt-2 text-[#573926] leading-[14px] w-[250px]">
        7:30 PM - 8:30 PM
      </Text>
      <View className="flex-row items-center mt-5 gap-x-2">
        <TouchableOpacity>
          <Text className="font-epilogueExtraBold text-[16px] text-[#FE8235] leading-[16px]">
            Join Now
          </Text>
        </TouchableOpacity>
        <Image source={images.play} className="w-[14px] h-[15px] mb-1" />
      </View>
      <Image
        source={images.weird}
        className="w-[280px] h-[20px] absolute bottom-0 right-0 rounded-br-[20px]"
      />
    </View>
  );
};

export default UpcomingSession;
