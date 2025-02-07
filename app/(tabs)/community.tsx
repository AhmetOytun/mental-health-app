import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IconsSwipable from "@/components/IconsSwipable";
import CommentComponent from "@/components/CommentComponent";
import Topbar from "@/components/Topbar";
import images from "@/constants/images";

const community = () => {
  return (
    <SafeAreaView className="bg-[#FBFBFB] flex-1">
      <ScrollView className="flex-1">
        <Topbar />
        <View className="px-[25px] mt-5">
          <Text className="text-[#371B34] text-[18px] font-epilogueSemiBold">
            Wellness Hub
          </Text>
        </View>
        <IconsSwipable />
        <View className="px-[25px] mt-5">
          <CommentComponent
            image={images.human4}
            name="Coal Dingo"
            recency="just now"
            comment="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            likeCount="2"
            active={true}
            commentCount=""
          />
          <CommentComponent
            image={images.human5}
            name="Pigeon Car"
            recency="3 hrs ago"
            comment="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            likeCount="12"
            active={false}
            commentCount="2"
          />
          <CommentComponent
            image={images.human4}
            name="Pigeon Car"
            recency="1 hr ago"
            comment="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            likeCount="12"
            active={false}
            commentCount="2"
          />
          <CommentComponent
            image={images.human6}
            name="Pigeon Car"
            recency="2 min ago"
            comment="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            likeCount="12"
            active={false}
            commentCount="2"
          />
          <CommentComponent
            image={images.human7}
            name="Pigeon Car"
            recency="3 hrs ago"
            comment="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            likeCount="12"
            active={false}
            commentCount="2"
          />
          <CommentComponent
            image={images.human4}
            name="Pigeon Car"
            recency="3 hrs ago"
            comment="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            likeCount="12"
            active={false}
            commentCount="2"
          />
        </View>
      </ScrollView>
      <TouchableOpacity className="absolute flex bottom-0 right-0 w-[58px] h-[58px] bg-[#FE8235] rounded-full m-7 items-center justify-center">
        <Image source={images.pencil} className="w-[27px] h-[27px]" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default community;
