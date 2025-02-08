import { Image, View } from "react-native";
import { Tabs } from "expo-router";
import images from "../../constants/images";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 80,
          paddingBottom: 31,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused && (
                <Image
                  source={images.selection}
                  style={{
                    tintColor: "#FE8235",
                    alignSelf: "center",
                    width: 12,
                    height: 7,
                    position: "absolute",
                    top: -25,
                  }}
                />
              )}
              <Image
                source={focused ? images.homeSelected : images.homeUnselected}
                style={{
                  tintColor: focused ? "#FE8235" : "#D9D8D8",
                  width: 28,
                  height: 28,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused && (
                <Image
                  source={images.selection}
                  style={{
                    tintColor: "#FE8235",
                    alignSelf: "center",
                    width: 12,
                    height: 7,
                    position: "absolute",
                    top: -28,
                  }}
                />
              )}
              <Image
                source={
                  focused ? images.sessionsSelected : images.sessionsUnselected
                }
                style={{
                  tintColor: focused ? "orange" : "#D9D8D8",
                  width: 31,
                  height: 21.6,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="comments"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? images.commentsSelected : images.commentsUnselected
              }
              style={{
                tintColor: focused ? "orange" : "#D9D8D8",
                width: 27,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused && (
                <Image
                  source={images.selection}
                  style={{
                    tintColor: "#FE8235",
                    alignSelf: "center",
                    width: 12,
                    height: 7,
                    position: "absolute",
                    top: -27,
                  }}
                />
              )}
              <Image
                source={
                  focused
                    ? images.communitySelected
                    : images.communityUnselected
                }
                style={{
                  tintColor: focused ? "orange" : "#D9D8D8",
                  width: 28,
                  height: 23,
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
