import { IconInfoProps } from "@/definitions";
import { Text, Image, TouchableOpacity } from "react-native";

const IconInfo = ({ image, text }: IconInfoProps) => {
  return (
    <TouchableOpacity className="bg-[#F4F3F1] rounded-[20px] h-[62px] mt-5 w-[48%] flex-row items-center gap-5">
      <Image source={image} className="w-[18px] h-[20px] ml-5" />
      <Text className="text-[#573926] text-[14px] font-epilogueBold">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default IconInfo;
