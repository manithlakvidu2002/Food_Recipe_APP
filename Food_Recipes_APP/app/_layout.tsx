import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="myPages/verificationPage" options={{ headerShown: false }}/>
      <Stack.Screen name="myPages/signUpPage" options={{ headerShown: false }}/>
      {/* <Stack.Screen name="myPages/homePage" options={{ headerShown: false }}/>
      <Stack.Screen name="myPages/explorePage" options={{ headerShown: false }}/> */}
    </Stack>
  );
}
