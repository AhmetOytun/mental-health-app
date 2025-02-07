import images from "@/constants/images";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";

const SessionBig = () => {
  return (
    <View className="bg-[#FEF3E7] rounded-[20px] pt-5 pl-5 h-[151px]">
      <Text className="text-[#573926] text-[22px] font-epilogueBold">
        1 on 1 Sessions
      </Text>
      <Text className="text-[#573926] text-[12px] font-rubikRegular mt-3 w-[215px]">
        Let's open up to the things that matter the most
      </Text>
      <View className="flex-row items-center mt-5 gap-x-2">
        <TouchableOpacity>
          <Text
            className={`text-[#FE8235] text-[16px] font-epilogueExtraBold ${
              Platform.OS === "ios" ? "mt-1" : ""
            }`}
          >
            Book Now
          </Text>
        </TouchableOpacity>
        <Image source={images.calendar} className="w-[14px] h-[16px]" />
      </View>
      <Image
        source={images.meetup}
        className="w-[80px] h-[80px] absolute bottom-[20px] right-[20px] ml-[10px]"
      />
      <Image
        source={images.weird}
        className="w-[280px] h-[20px] absolute bottom-0 right-0 rounded-br-[20px]"
      />
    </View>
  );
};

export default SessionBig;
