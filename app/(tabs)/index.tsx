import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <StatusBar hidden />
      <View className="flex-1 bg-primary ">
        <View style={{ flex: 1 }}>
          <Image source={images.bg} className="absolute w-full z-0" />

          <ScrollView
            className="flex-1 px-5"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
          >
            <Image
              source={icons.logo}
              className="w-12 h-10 mt-10 mb-5 mx-auto"
            />

            <View className="flex-1 mt-5">
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search for a movie"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
