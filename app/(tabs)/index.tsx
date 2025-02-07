import { SafeAreaView, ScrollView, Image, Text, View } from "react-native";
import React from "react";
import EmotionsSwipable from "@/components/EmotionsSwipable";
import SessionBig from "@/components/SessionBig";
import IconInfo from "@/components/IconInfo";
import Quote from "@/components/Quote";
import PlaceHolder from "@/components/PlaceHolder";
import Topbar from "@/components/Topbar";
import images from "@/constants/images";

const index = () => {
  return (
    <SafeAreaView className="bg-[#FBFBFB] flex-1">
      <ScrollView className="flex-1">
        <Topbar />
        <Text className="text-[#333333] text-[26px] mt-5 font-epilogueSemiBold px-[25px]">
          Good Afternoon,
        </Text>
        <Text className="text-[#371B34] text-[26px] mt-1 font-epilogueBold px-[25px]">
          Sarina!
        </Text>
        <Text className="text-[#371B34] text-[16px] mt-5 font-epilogueMedium px-[25px]">
          How are you feeling today?
        </Text>
        <EmotionsSwipable />
        <View className="w-full px-[25px] mb-5">
          <SessionBig />
          <View className="flex-row justify-between mb-5 mt-3">
            <IconInfo image={images.journal} text="Journal" />
            <IconInfo image={images.library} text="Library" />
          </View>
          <Quote />
          <PlaceHolder />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
