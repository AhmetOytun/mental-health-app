import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";
import { RescheduleComponentProps } from "@/definitions";

const Reschedule = ({
  image,
  name,
  title,
  date,
  time,
  button1text,
  button2text,
  bgcolor,
  border,
}: RescheduleComponentProps) => {
  return (
    <View
      style={{
        backgroundColor: bgcolor,
      }}
      className={`h-[171px] rounded-2xl flex-col mt-5 px-5 py-3 ${
        border ? "border-[1px] border-[#F4F4F4]" : ""
      }`}
    >
      <View className="h-[60px] flex-row items-center">
        <Image source={image} className="w-[35px] h-[35px]" />
        <View className="flex-col ml-5">
          <Text className="font-rubikMedium text-[14px] text-[#573926]">
            {name}
          </Text>
          <Text className="font-rubikRegular text-[12px] text-[#573926]">
            {title}
          </Text>
        </View>
      </View>
      <View className="w-full border-b-[1px] border-[#D9D8D84D] self-center"></View>
      <View className="flex-row gap-x-5">
        <View className="flex-row items-center gap-x-2 mt-3 h-[17px]">
          <Image source={images.whitecalendar} className="w-[13px] h-[15px]" />
          <Text className="font-rubikRegular text-[12px] text-[#707070]">
            {date}
          </Text>
        </View>
        <View className="flex-row items-center gap-x-2 mt-3 h-[17px]">
          <Image source={images.whiteclock} className="w-[14px] h-[15px]" />
          <Text className="font-rubikRegular text-[12px] text-[#707070]">
            {time}
          </Text>
        </View>
      </View>
      <View className="flex-row items-center mt-5 gap-x-10">
        <TouchableOpacity className="flex-row items-center h-[40px] bg-[#FE8235] w-[117px] justify-center rounded-[9px]">
          <Text className="font-epilogueBold text-[13px] text-white">
            {button1text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center h-[40px] justify-center rounded-[9px]">
          <Text className="font-epilogueBold text-[13px] text-[#FE8235]">
            {button2text}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reschedule;
