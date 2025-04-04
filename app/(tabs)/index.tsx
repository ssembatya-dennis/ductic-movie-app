import { images } from "@/constants/images";
import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <>
      <StatusBar hidden />
      <View className="flex-1 bg-primary ">
        <View style={{ flex: 1 }}>
          <Image source={images.bg} />
        </View>
      </View>
    </>
  );
}
