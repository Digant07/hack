import { Stack } from "expo-router";



export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Ensure you are referencing valid screens/components */}
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="login"  />
    </Stack>
  );
}
