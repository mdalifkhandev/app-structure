import ScreenHeader from "@/components/header/ScreenHeader";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace("/(auth)/login");
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-6 py-5">
        <ScreenHeader title="Settings" subtitle="Add project settings here." />
        <PrimaryButton className="mt-8" title="Log out" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}
