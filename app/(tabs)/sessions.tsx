import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import UpcomingSession from "@/components/UpcomingSession";
import Reschedule from "@/components/Reschedule";
import Topbar from "@/components/Topbar";
import images from "@/constants/images";

const sessions = () => {
  return (
    <SafeAreaView className="bg-[#FBFBFB] flex-1">
      <ScrollView className="flex-1">
        <Topbar />
        <View className="px-[25px] mt-5">
          <UpcomingSession />
          <View className="flex-row justify-between items-center mt-5 w-full">
            <View className="flex-row items-center gap-x-2">
              <Text className="font-epilogueMedium text-[18px]">
                All Sessions
              </Text>
              <Image
                className={`w-[14px] h-[8px] ${
                  Platform.OS === "android" ? "mt-1" : ""
                }`}
                source={images.downarrow}
              />
            </View>
            <Image source={images.updown} style={{ width: 12, height: 17 }} />
          </View>
          <View className="flex-col mb-5">
            <Reschedule
              image={images.human1}
              name="Sahana V"
              title="Msc in Clinical Psychology"
              date="31st March '22"
              time="7:30 PM - 8:30 PM"
              button1text="Reschedule"
              button2text="Join Now"
              bgcolor="#FEF3E7"
              border={false}
            />
            <Reschedule
              image={images.human2}
              name="Sahana V"
              title="Msc in Clinical Psychology"
              date="31st March '22"
              time="7:30 PM - 8:30 PM"
              button1text="Re-book"
              button2text="View Profile"
              bgcolor="#F8F6F5"
              border={true}
            />
            <Reschedule
              image={images.human3}
              name="Sahana V"
              title="Msc in Clinical Psychology"
              date="31st March '22"
              time="7:30 PM - 8:30 PM"
              button1text="Re-book"
              button2text="View Profile"
              bgcolor="#F8F6F5"
              border={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sessions;
