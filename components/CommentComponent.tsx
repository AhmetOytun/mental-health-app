import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import { CommentComponentProps } from "@/definitions";

const CommentComponent = ({
  name,
  recency,
  comment,
  active,
  likeCount,
  commentCount,
  image,
}: CommentComponentProps) => {
  const [liked, setLiked] = useState(active);
  return (
    <View className="flex-row border-b border-[#D9D8D84D] py-5">
      <Image source={image} className="w-[42px] h-[42px]" />
      <View className="ml-5 flex-col gap-y-1">
        <View className="flex-row items-center gap-x-2">
          <Text className="text-[#573926] font-rubikMedium">{name}</Text>
          <View className="border rounded-full border-[#707070]" />
          <Text className="text-[#707070] font-rubikRegular text-[12px]">
            {recency}
          </Text>
        </View>
        <Text className="text-[13px] text-[#573926] font-rubikRegular w-64">
          {comment}
        </Text>
        <View className="flex-row items-center justify-between mt-2 w-[90%]">
          <View className="flex-row gap-x-5">
            <View className="flex-row items-center">
              <TouchableOpacity onPress={() => setLiked(!liked)}>
                <Image
                  source={liked ? images.thumbactive : images.thumbinactive}
                  className="w-[20px] h-[20px]"
                />
              </TouchableOpacity>
              <Text className="text-[#573926] font-rubikRegular text-[12px] ml-2">
                {likeCount}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Image source={images.comment} className="w-[20px] h-[20px]" />
              <Text className="text-[#573926] font-rubikRegular text-[12px] ml-2">
                {commentCount}
              </Text>
            </View>
          </View>
          <Image source={images.share} style={{ width: 20, height: 20 }} />
        </View>
      </View>
    </View>
  );
};

export default CommentComponent;
