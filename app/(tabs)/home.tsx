import ScreenHeader from "@/components/header/ScreenHeader";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-6 py-5">
        <ScreenHeader title="Home" subtitle="Your starter app is ready." />
        <View className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <Text className="text-lg font-semibold text-slate-950">Template screen</Text>
          <Text className="mt-2 text-base leading-6 text-slate-500">
            Replace this content with your new project features.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
