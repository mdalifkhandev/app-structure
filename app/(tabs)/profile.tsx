import ScreenHeader from "@/components/header/ScreenHeader";
import { useAuthStore } from "@/stores/authStore";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const user = useAuthStore((state) => state.user);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-6 py-5">
        <ScreenHeader title="Profile" subtitle="Basic user state placeholder." />
        <View className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <Text className="text-base font-semibold text-slate-950">
            {user?.name || "Template User"}
          </Text>
          <Text className="mt-1 text-slate-500">{user?.email || "user@example.com"}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
