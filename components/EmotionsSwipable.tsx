import images from "@/constants/images";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";

const items = [
  {
    emotion: "Happy",
    image: images.happy,
    color: "#EF5DA8",
    width: 34,
    height: 34,
  },
  {
    emotion: "Calm",
    image: images.calm,
    color: "#AEAFF7",
    width: 34,
    height: 34,
  },
  {
    emotion: "Manic",
    image: images.manic,
    color: "#A0E3E2",
    width: 37,
    height: 34,
  },
  {
    emotion: "Angry",
    image: images.angry,
    color: "#F09E54",
    width: 34,
    height: 34,
  },
  {
    emotion: "Relaxed",
    image: images.relaxed,
    color: "#C3F2A6",
    width: 34,
    height: 34,
  },
];

const EmotionsSwipable = () => {
  return (
    <FlatList
      horizontal
      data={items}
      className="my-5 ml-5"
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View className="mx-[13px] items-center">
            <View
              className="flex-row items-center justify-center w-[60px] h-[62px] rounded-[16px]"
              style={{
                backgroundColor: item.color,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: item.width,
                  height: item.height,
                  padding: 5,
                }}
              />
            </View>
            <Text
              style={{
                color: "#828282",
                fontSize: 12,
                marginTop: 10,
                fontFamily: "Epilogue-Regular",
              }}
            >
              {item.emotion}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default EmotionsSwipable;
