import images from "@/constants/images";
import { View, Text, Image } from "react-native";

const Quote = () => {
  return (
    <View className="bg-[#F8F6F6] h-[79px] rounded-[20px] justify-center px-5 mb-5">
      <Text className="text-[#707070] w-[85%] font-epilogueRegular leading-[20px]">
        “It is better to conquer yourself than to win a thousand battles”
      </Text>
      <Image
        source={images.quote}
        className="w-[30px] h-[24px] absolute right-5"
      />
    </View>
  );
};

export default Quote;
